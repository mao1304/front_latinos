import { onMounted, onUnmounted } from "vue";

export default function useCanvasCursor(canvasRef) {
    let ctx = null;
    let lines = [];
    let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let animationFrameId = null;

    const E = {
        debug: true,
        friction: 0.5,
        trails: 20,
        size: 20,
        dampening: 0.25,
        tension: 0.98,
    };

    function Node() {
        this.x = 0;
        this.y = 0;
        this.vy = 0;
        this.vx = 0;
    }

    function Line(options) {
        this.init(options || {});
    }

    Line.prototype = {
        init: function (options) {
            this.spring = options.spring + 0.1 * Math.random() - 0.02;
            this.friction = E.friction + 0.01 * Math.random() - 0.002;
            this.nodes = [];
            for (let i = 0; i < E.size; i++) {
                const node = new Node();
                node.x = pos.x;
                node.y = pos.y;
                this.nodes.push(node);
            }
        },
        update: function () {
            let spring = this.spring;
            let t = this.nodes[0];
            t.vx += (pos.x - t.x) * spring;
            t.vy += (pos.y - t.y) * spring;

            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                if (i > 0) {
                    const prev = this.nodes[i - 1];
                    node.vx += (prev.x - node.x) * spring;
                    node.vy += (prev.y - node.y) * spring;
                    node.vx += prev.vx * E.dampening;
                    node.vy += prev.vy * E.dampening;
                }
                node.vx *= this.friction;
                node.vy *= this.friction;
                node.x += node.vx;
                node.y += node.vy;
                spring *= E.tension;
            }
        },
        draw: function () {
            if (!ctx) return;

            let x = this.nodes[0].x;
            let y = this.nodes[0].y;

            ctx.beginPath();
            ctx.moveTo(x, y);

            for (let i = 1; i < this.nodes.length - 2; i++) {
                const current = this.nodes[i];
                const next = this.nodes[i + 1];
                x = 0.5 * (current.x + next.x);
                y = 0.5 * (current.y + next.y);
                ctx.quadraticCurveTo(current.x, current.y, x, y);
            }

            const t = this.nodes[this.nodes.length - 2];
            const n = this.nodes[this.nodes.length - 1];
            ctx.quadraticCurveTo(t.x, t.y, n.x, n.y);
            ctx.stroke();
            ctx.closePath();
        },
    };

    const onMouseMove = (event) => {
        pos.x = event.clientX;
        pos.y = event.clientY;
    };

    const resizeCanvas = () => {
        if (!canvasRef.value) return;

        canvasRef.value.width = window.innerWidth;
        canvasRef.value.height = window.innerHeight;
    };

    const render = () => {
        if (!ctx || !ctx.running) return;

        ctx.globalCompositeOperation = "source-over";
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.globalCompositeOperation = "lighter";
        // Set a fixed color with opacity
        ctx.strokeStyle = "rgba(219, 158, 21, 0.5)"; // Vue green color with 50% opacity
        ctx.lineWidth = 1;

        lines.forEach((line) => {
            line.update();
            line.draw();
        });

        ctx.frame++;
        animationFrameId = requestAnimationFrame(render);
    };

    const startCanvasCursor = () => {
        if (!canvasRef.value) return;

        ctx = canvasRef.value.getContext("2d");
        if (!ctx) return;

        ctx.running = true;
        ctx.frame = 1;

        lines = [];
        for (let i = 0; i < E.trails; i++) {
            lines.push(new Line({ spring: 0.45 + (i / E.trails) * 0.025 }));
        }

        document.addEventListener("mousemove", onMouseMove);
        resizeCanvas();
        render();
    };

    const stopCanvasCursor = () => {
        if (ctx) {
            ctx.running = false;
        }
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        document.removeEventListener("mousemove", onMouseMove);
    };

    onMounted(() => {
        setTimeout(() => {
            startCanvasCursor();
        }, 0);
        window.addEventListener("resize", resizeCanvas);
    });

    onUnmounted(() => {
        stopCanvasCursor();
        window.removeEventListener("resize", resizeCanvas);
    });
}