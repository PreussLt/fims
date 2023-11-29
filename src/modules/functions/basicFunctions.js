// Hier wird der Import aller Funktionen gehandelt

    export const handleClickScroll =(section) =>{
        const element = document.getElementById(section);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

