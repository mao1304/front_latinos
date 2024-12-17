<template>
    <div class="section-title contact-title mb-35">
        <span class="sub-title" style="font-size: 18px;">Cuéntenos sus preocupaciones <br> y le ayudaremos a
            encontrar<br> la mejor solución</span>
    </div>
    <div class="contact-form-inner">
        <form class="contact-form pos-rel" action="#">
            <div class="row">
                <div class="col-lg-6">
                    <div class="xb-item--field">
                        <label for="name">Tu Nombre</label>
                        <input id="name" type="text" placeholder="Gomez Golatria">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="xb-item--field">
                        <label for="mail">Email</label>
                        <input id="mail" type="text" placeholder="gomez@example.com">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="xb-item--field">
                        <label for="number">Teléfono</label>
                        <input id="number" type="text" placeholder="+1 800 123 456 789">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="xb-item--field">
                        <label for="service">Compañía</label>
                        <input id="service" type="text" placeholder="xpressbuddy Digital Solutions">
                    </div>
                </div>
                <div class="col-12">
                    <div class="xb-item--field xb-item--textarea">
                        <label for="message">Mensaje</label>
                        <textarea name="message" id="message" cols="30" rows="10"
                            placeholder="Hola equipo de Entrenando Latinos, necesito ..."></textarea>
                    </div>
                    <button type="submit" class="circle-btn port-btn xb-element-parallax">
                        <span class="button__bg"></span>Enviar
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
// defineProps({
//     title: { type: String, required: true },
// content: { type: [Array, String], required: true },
// links: { type: Boolean, default: false },
// isSocial: { type: Boolean, default: false },
// })
</script>