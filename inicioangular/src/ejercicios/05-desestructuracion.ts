interface Reproductor{
    volumen:number;
    segundo:number;
    cancion: string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    anio:number;
}

const reproductor:Reproductor = {
    volumen:90,
    segundo:35,
    cancion:'Physical',
    detalles:{
        autor:'Dua Lipa',
        anio:2020
    }

}

const {volumen, segundo,cancion,detalles:{autor} }=reproductor;
//const { autor}=detalles;

console.log('El volumen actual es de:',reproductor.volumen);
console.log('El segundo actual de:',reproductor.segundo);
console.log('La cancion actual de:',reproductor.cancion);
console.log('La autora es :',autor);