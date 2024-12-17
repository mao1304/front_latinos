import { ref, onMounted, onUnmounted } from 'vue';

export interface TimeRemaining {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const useCountdown = (targetDate: string) => {
    const timeRemaining = ref<TimeRemaining>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    let timer: number;

    const calculateTimeRemaining = () => {
        const now = new Date().getTime();
        const target = new Date(targetDate).getTime();
        const difference = target - now;

        if (difference > 0) {
            timeRemaining.value = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        } else {
            timeRemaining.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    };

    onMounted(() => {
        calculateTimeRemaining();
        timer = setInterval(calculateTimeRemaining, 1000);
    });

    onUnmounted(() => {
        clearInterval(timer);
    });

    return { timeRemaining, calculateTimeRemaining };
};
