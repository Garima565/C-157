AFRAME.registerComponent("comics", {
    init: function () {
      this.comicContainer = this.el;
      this.createCards();
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "spiderman",
          title: "The Amazing Spiderman",
          url: "assets/thumbnails/spiderman.jpg",
        },
        {
          id: "ironman",
          title: "The Invincible Iron Man",
          url: "assets/thumbnails/ironman.jpg",
        },
  
        {
          id: "batman",
          title: "BATMAN",
          url: "assets/thumbnails/batman.webp",
        },
        {
          id: "superman",
          title: "The Adventures of Superman",
          url: "assets/thumbnails/superman.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        
        const borderEl = this.createBorder(position,item.id);
  
        // Thumbnail Element
       
        const thumbnail = this.createThumbnail(item);
        borderEl.appendChild(thumbnail);
  
        // Title Text Element
        const titleEl = this.createTitleEl(position, item);
        borderEl.appendChild(titleEl);
  
        this.comicContainer.appendChild(borderEl);
      }
    },
    createBorder: function (position, id){
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "ring",
        radiusInner: 9,
        radiusOuter: 10,
      });
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", {
        color:"0077CC",
        opacity: 1,
      });
      return entityEl;
    
    },
    createThumbnail: function(item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "circle",
        radius:9,
      });
      entityEl.setAttribute("material", {src: item.url});
      console.log(item.url)
      return entityEl;
    },
    createTitleEl: function (position, item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width: 70,
        color: "#e65100",
        value: item.title,
      });
      const elPosition = position;
      elPosition.y = -20;
      entityEl.setAttribute("position",elPosition);
      entityEl.setAttribute("visible",true);
      return entityEl;
    },
  
  });
  