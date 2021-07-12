const r = process.argv.slice(1);

function alanbulma(){
  
    let piSayısı = Math.PI;
    let alan = piSayısı * (r*r);

    console.log(piSayısı)
    console.log(process.argv)
}
alanbulma(r[0]*1);