<template>
    <div class="technology">
        <div class="oneTechno">
            <div class="technoData">
                <div class="technologyHeader">
                    <div class="technologyLogo">
                        <Icon
                            name="uil:vuejs"
                            color="black"
                            class="technologyIcon"
                        />
                    </div>
                    <div class="technologyName">VueJs</div>
                </div>

                <div class="skill">Niveaux :</div>
                <div class="skillLevel">
                    <Skillbar :skillNumber="4" />
                </div>
                <p class="technologyDetails">
                    Utilisé chez AgenceGW et personnellement pour des
                    applications. VueJs m'a permis de renforcer mes compétences
                    en développement front-end.
                </p>
            </div>
        </div>
        <div class="oneTechno">
            <div class="technoData">
                <div class="technologyHeader">
                    <div class="technologyLogo">
                        <Icon
                            name="uil:react"
                            color="black"
                            class="technologyIcon"
                        />
                    </div>
                    <div class="technologyName">React</div>
                </div>

                <div class="skill">Niveaux :</div>
                <div class="skillLevel">
                    <Skillbar :skillNumber="3" />
                </div>
                <p class="technologyDetails">
                    Utilisé dans de nombreux projets durant mes études et dans
                    quelques projet personnelle
                </p>
            </div>
        </div>
        <div class="oneTechno">
            <div class="technoData">
                <div class="technologyHeader">
                    <div class="technologyLogo">
                        <Icon
                            name="devicon:express"
                            color="black"
                            class="technologyIcon"
                        />
                    </div>
                    <div class="technologyName">Express</div>
                </div>

                <div class="skill">Niveaux :</div>
                <div class="skillLevel">
                    <Skillbar :skillNumber="3" />
                </div>
                <p class="technologyDetails">
                    Utilisé en autodidacte pour comprendre le développement
                    backend en Node.js, renforçant ma maîtrise des API.
                </p>
            </div>
        </div>
        <div class="oneTechno">
            <div class="technoData">
                <div class="technologyHeader">
                    <div class="technologyLogo">
                        <Icon
                            name="tabler:brand-prisma"
                            color="black"
                            class="technologyIcon"
                        />
                    </div>
                    <div class="technologyName">Prisma</div>
                </div>

                <div class="skill">Niveaux :</div>
                <div class="skillLevel">
                    <Skillbar :skillNumber="3" />
                </div>
                <p class="technologyDetails">
                    Appris en autodidacte pour simplifier l'interaction avec les
                    bases de données en TS.
                </p>
            </div>
        </div>
        <div class="oneTechno">
            <div class="technoData">
                <div class="technologyHeader">
                    <div class="technologyLogo">
                        <Icon
                            name="simple-icons:jest"
                            color="black"
                            class="technologyIcon"
                        />
                    </div>
                    <div class="technologyName">Jest</div>
                </div>

                <div class="skill">Niveaux :</div>
                <div class="skillLevel">
                    <Skillbar :skillNumber="5" />
                </div>
                <p class="technologyDetails">
                    Utilisé durant mes études pour les tests unitaires, Jest m’a
                    permis d’améliorer la qualité et la fiabilité de mes
                    applications.
                </p>
            </div>
        </div>
        <div class="oneTechno">
            <div class="technoData">
                <div class="technologyHeader">
                    <div class="technologyLogo">
                        <Icon
                            name="logos:symfony"
                            color="black"
                            class="technologyIcon"
                        />
                    </div>
                    <div class="technologyName">Symfony</div>
                </div>

                <div class="skill">Niveaux :</div>
                <div class="skillLevel">
                    <Skillbar :skillNumber="2" />
                </div>
                <p class="technologyDetails">
                    Principalement utilisé chez AgenceGW pour le backend,
                    Symfony m'a permis de renforcer mes compétences en
                    architecture MVC.
                </p>
            </div>
        </div>
        <div class="oneTechno">
            <div class="technoData">
                <div class="technologyHeader">
                    <div class="technologyLogo">
                        <Icon
                            name="devicon-plain:cypressio-wordmark"
                            color="black"
                            class="technologyIcon"
                        />
                    </div>
                    <div class="technologyName">Cypress</div>
                </div>

                <div class="skill">Niveaux :</div>
                <div class="skillLevel">
                    <Skillbar :skillNumber="4" />
                </div>
                <p class="technologyDetails">
                    Utilisé en entreprise pour les tests end-to-end, Cypress m’a
                    permis d'automatiser et de fiabiliser le processus de test.
                </p>
            </div>
        </div>
        <div class="oneTechno">
            <div class="technoData">
                <div class="technologyHeader">
                    <div class="technologyLogo">
                        <Icon
                            name="la:docker"
                            color="black"
                            class="technologyIcon"
                        />
                    </div>
                    <div class="technologyName">Docker</div>
                </div>

                <div class="skill">Niveaux :</div>
                <div class="skillLevel">
                    <Skillbar :skillNumber="4" />
                </div>
                <p class="technologyDetails">
                    Utilisé pour la virtualisation des environnements, Docker
                    m'a permis d'assurer la portabilité et la cohérence des
                    applications.
                </p>
            </div>
        </div>
        <div class="oneTechno">
            <div class="technoData">
                <div class="technologyHeader">
                    <div class="technologyLogo">
                        <Icon
                            name="logos:kirby-icon"
                            color="black"
                            class="technologyIcon"
                        />
                    </div>
                    <div class="technologyName">Kirby</div>
                </div>

                <div class="skill">Niveaux :</div>
                <div class="skillLevel">
                    <Skillbar :skillNumber="4" />
                </div>
                <p class="technologyDetails">
                    Utilisé chez AgenceGW pour des sites éco-conçus, Kirby m’a
                    permis de créer des solutions légères et optimisées.
                </p>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Skillbar from "~/components/Skillbar.vue";

export default {
    components: { Skillbar },
    mounted() {
        const technologies = this.$el.querySelectorAll(".oneTechno");
        technologies.forEach((techno, index) => {
            techno.style.animationDelay = `${index * 0.3}s`;
        });
    },
};
</script>
<style scoped>
.technology {
    padding: 2rem;
    height: 80vh;
    overflow-y: scroll;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin: auto;
    -ms-overflow-style: none;
}
.technology::-webkit-scrollbar {
    display: none;
}
.technologyHeader {
    margin: 3px;
    display: flex;
    align-items: flex-end;
    border-bottom: 2px solid black;
    padding-bottom: 1rem;
}
.technologyName {
    font-size: 2rem;
    margin-left: 1rem;
}
.skill {
    margin: 1rem 0rem;
}
.oneTechno {
    display: flex;
    flex-direction: column;
    max-width: 20rem;
    height: 40%;
    margin-bottom: 5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.5s ease;
    animation: slideIn 450ms ease-out forwards;
    transform: translateY(200px);
    filter: blur(10px);
    border-radius: 3px;
}
.oneTechno:hover {
    transform: scale(1.2) !important;
}
.technoData {
    margin: 1rem;
}
.technologyIcon {
    height: 3rem;
    width: 3rem;
}
@keyframes slideIn {
    to {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
    }
}
@media (max-width: 815px) {
    .technology {
        justify-content: center;
    }
}
</style>
