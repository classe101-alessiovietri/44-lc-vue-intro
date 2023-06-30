console.log(Vue);

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            zucchero: 'Caffè zuccherato',
            zuccheroDue: 'da input',
            firstName: 'Alessio',
            lastName: 'Vietri',
            age: 31,

            // Queste cose mi servono di meno
            knownLanguages: ['php', 'js'],
            wearsGlasses: true,

            // Queste per lo stile
            classiParagrafo: 'text-red font-bold border',
            redValue: 33,
            greenValue: 22,
            blueValue: 178,
        }
    },
    methods: {
        sayHi() {
            return 'Ciao!';
        },
        alertAllUtente() {
            alert('Ciao utente!');
        },
        stampaClassi() {
            console.log(this.classiParagrafo);
        }
    }
});

console.log(app);

app.mount('#tazzina-di-caffe');


// document.querySelector('h1').innerHTML = document.getElementById('my-input').value + document.getElementById('my-input-2').value;

// document.getElementById('my-input').addEventListener('keyup', function() {
//     document.querySelector('h1').innerHTML = this.value + document.getElementById('my-input-2').value;
// });

// document.getElementById('my-input-2').addEventListener('keyup', function() {
//     document.querySelector('h1').innerHTML = document.getElementById('my-input').value + this.value;
// });
