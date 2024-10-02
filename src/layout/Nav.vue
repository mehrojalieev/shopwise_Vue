<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';

const openSearch = ref(false)

watch(openSearch, () => {
    document.body.style.overflow = openSearch.value ? 'hidden' : 'auto'
})

</script>


<template>
    <div :style="{ transform: openSearch ? 'translateX(0)' : 'translateX(-100%)' }" class="search-overlay">
        <div class="search-section">
            <form>
                <span @click="openSearch = false" class="material-symbols-outlined close-icon">close</span>
                <input type="text" placeholder="Search">
                <span class="material-symbols-outlined search-icon">search</span>
            </form>
        </div>
    </div>
    <nav class="nav">


        <div class="container nav-wrapper">
            <RouterLink to="/" class="nav-logo">
                <img src="../assets/images/logo.png" alt="">
            </RouterLink>
            <ul class="nav-menu">
                <li class="nav-item">

                    <RouterLink class="item-link" to="/">Home</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="item-link" to="/about">Products</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="item-link" to="/about">About Us</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="item-link" to="/about">SHop</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="item-link" to="/contact">Contact Us</RouterLink>
                </li>
            </ul>

            <div class="nav-actions">
                <span @click="openSearch = true" class="material-symbols-outlined search-icon">search</span>
                <div class="cart-action">
                    <span class="material-symbols-outlined cart-icon">shopping_cart</span>
                </div>
            </div>
        </div>
    </nav>
</template>


<style lang="scss" scoped>
nav {
    width: 100%;
}

.search-overlay {
    display: flex;
    align-self: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    transition: .3s;
    height: 100% !important;
    background-color: rgba(0, 0, 0, 0.808);

    .search-section {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    form {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: fit-content;
        max-width: 800px;
        width: 100%;
        border-bottom: 2px solid var(--light-color);
        padding-bottom: 12px;

        .close-icon {
            position: absolute;
            top: -180px;
            right: 0;
        }

        input {
            width: 100%;
            border: none;
            outline: none;
            background: transparent;
            color: var(--light-color);
            font-size: 16px;
            font-weight: 500;

            &::placeholder {
                color: var(--light-color);
            }
        }

        .search-icon {
            font-size: 26px;
            font-weight: 400;
            color: var(--light-color);

            &:hover {
                cursor: pointer;
                color: var(--danger-hover);
            }
        }

        .close-icon {
            font-size: 26px;
            font-weight: 400;
            color: var(--light-color);

            &:hover {
                cursor: pointer;
                color: var(--danger-hover);
            }
        }
    }
}

.nav-wrapper {
    z-index: 10 !important;
    width: 100%;
    padding: .8rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-logo {
        max-width: 180px;
        height: 50px;

        img {
            object-fit: contain;
            width: 100%;
            height: 100%;
        }
    }

    .nav-menu {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 2rem;

        li {
            .item-link {
                color: var(--light-color);
                font-weight: 500;
                font-size: 16px;
                text-transform: uppercase;

                &:hover {
                    color: var(--danger-hover);
                }
            }
        }
    }

    .nav-actions {
        display: flex;
        align-items: center;
        column-gap: 1.5rem;

        .search-icon {
            font-size: 26px;
            font-weight: 400;
            color: var(--light-color);

            &:hover {
                cursor: pointer;
                color: var(--danger-hover);
            }
        }

        .cart-action {
            .cart-icon {
                font-size: 24px;
                font-weight: 400;
                color: var(--light-color);

                &:hover {
                    cursor: pointer;
                    color: var(--danger-hover);
                }
            }
        }
    }
}
</style>