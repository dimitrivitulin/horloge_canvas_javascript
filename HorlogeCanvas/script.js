setInterval(horloge, 100)

function horloge(){

  
  // Date actuelle
  let now = new Date();
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec =  now.getSeconds();
  
  //Heures au format 12h
  hr = hr >= 12 ? hr-12 : hr;
  
  //On va chercher  le canvas
  const ctx = document.querySelector("#horloge").getContext("2d");
  ctx.save()
  ctx.clearRect(0, 0, 300, 300)
  
  // On définit les couleurs
  ctx.fillStyle = "white";
  ctx.strokeStyle = "crimson";
  ctx.lineWidth = 2;
  
  //On définit le centre de l'horloge
  ctx.translate(150, 150);
  
  // Il faut définir la position du 0 en haut
  ctx.rotate(-Math.PI/2)
  
  // Marquage des heures
  ctx.save()
  for(let heure = 0; heure < 12; heure++){
    ctx.beginPath()
    ctx.rotate(Math.PI / 6)
    ctx.moveTo(70,0)
    ctx.lineTo(90,0)
    ctx.stroke()
  }
  ctx.restore()
  
  // Marquage des 
  // On change la taille du trait
  ctx.lineWidth = 1;
  ctx.strokeStyle = "black";
  ctx.save()
  for(let minute = 0; minute < 60 ; minute++){
    // On vérifie si mi minute n'est pas multiple de 5
    if(minute % 5 != 0){
      ctx.beginPath()
      ctx.moveTo(80,0)
      ctx.lineTo(85,0)
      ctx.stroke()
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore()
  
  // Aiguille des heures
  ctx.strokeStyle = "black"
  ctx.lineWidth = 4
  
  // On fait tourner l'aiguille dans le sens de l'heure qu'il est à la seconde près
  ctx.save()
  ctx.rotate(hr*(Math.PI / 6) + min * (Math.PI / 360) + sec * (Math.PI / 21600))
  ctx.beginPath()
  ctx.lineCap = "round"
  ctx.moveTo(-10,0)
  ctx.lineTo(60,0)
  ctx.shadowColor = "gray";
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.stroke()
  ctx.restore()
  
  // Aiguille des Minutes
  ctx.lineWidth = 3
  ctx.save()
  ctx.rotate(min * (Math.PI /30)+ sec * (Math.PI / 21600))
  ctx.beginPath()
  ctx.lineCap = "round"
  ctx.moveTo(-15,0)
  ctx.lineTo(75,0)
  ctx.shadowColor = "grey";
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.stroke()
  ctx.restore()
  
  // Aiguille des secondes
  ctx.strokeStyle = "red"
  ctx.fillStyle = "red"
  ctx.lineWidth = 1
  ctx.save()
  ctx.rotate(sec * Math.PI /30)
  ctx.beginPath()
  ctx.lineCap = "round"
  ctx.moveTo(-20,0)
  ctx.lineTo(75,0)
  ctx.shadowColor = "gray";
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle = "grey"
  ctx.fillStyle = "grey"
  ctx.arc(0, 0, 5, 0, Math.PI * 2, true)
  ctx.fill()
  ctx.strokeStyle = "black"
  ctx.lineWidth = 0.1
  ctx.beginPath()
  ctx.arc(0, 0, 6, 0, Math.PI * 2, true)
  ctx.shadowColor = "transparent";
  ctx.stroke()
  ctx.restore()
  
  //Cadran
  ctx.strokeStyle = "gray"
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.arc(0, 0, 83, 0, Math.PI * 2, true)
  ctx.stroke()
  ctx.strokeStyle = "#F5F3F2"
  ctx.lineWidth = 20
  ctx.beginPath()
  ctx.arc(0, 0, 92, 0, Math.PI * 2, true)
  ctx.shadowColor = "lightgray";
  ctx.shadowBlur = 5;
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;
  ctx.stroke()

  ctx.strokeStyle = "ivory"
  ctx.lineWidth = 0.2
  ctx.beginPath()
  ctx.arc(0, 0, 102, 0, Math.PI * 2, true)
  ctx.shadowColor = "transparent";
  ctx.stroke()

  ctx.restore()
}