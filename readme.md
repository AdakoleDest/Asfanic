@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');


*{
    box-sizing: border-box;
}
:root{
    --transparent-color: rgba(0, 0, 0, 0.2);
    --logo-color: rgba(0, 0, 0, 0.7);
    --orange-color: rgb(240, 158, 5);
}
body{
    margin: 0;
    padding: 0;
    position: relative;
    display: flex;
    
}

.nav-bar{
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-around;
    overflow-x: hidden;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: relative;
}

.logo{
    font-size: 2.5rem;
    font-family: 'Oswald', sans-serif;
    color: var(--logo-color);

}
.period{
    color: var(--orange-color);
}
.categories{
    border: 1px solid var(--transparent-color);
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    gap: 1.3rem;
    border-radius: 5px;
}

input, select{
    border: none;
    font-size:1rem;
    outline: none;
}
select{
    margin-left: 1rem;

}

#search-inp{
    font-size: 1rem;
    padding-left: 1rem;
    width: 50%;
}
.search-icon{
    background: var(--orange-color);
    padding: 0.8rem 1.2rem;
    color: var(--logo-color);
    font-size: 1.2rem;
    border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
}

input:focus {
    &::-webkit-input-placeholder {
        color: transparent;
        -webkit-transition: color 0.2s ease;
        transition: color 0.2s ease;
    }
}


.fav-cart{
    display: flex;
    gap: 1rem;
    font-size: 1.4rem;
    color: var(--logo-color);
}

/* MOBILE PHONES */
@media (max-width: 468px){
    .logo{
        font-size: 1.5rem;
        align-self: flex-start;
        margin-left: 1.1rem;
    }
    .nav-bar{
        flex-direction: column;
        align-items: center;
    }
        input,
        select, #search-inp {
            font-size: .8rem;
        }
                .search-icon {
                    background: orange;
                    padding: 1rem 1rem;
                }

                .categories{
                    gap: 0.2rem;
                    width: 90vw;
                }

    .fav-cart{
        position: absolute;
        right: 1rem;
        bottom: 40%; 
        align-self: flex-end;
    }
}

@media (max-width: 744){
    .categories {
            gap: 0.1rem;
        }
                .logo {
                    font-size: 1.8rem;
                    align-self: flex-start;
                    margin-left: 1.1rem;
                }
                                input,
                                select,
                                #search-inp {
                                    font-size: .6rem;
                                }
}