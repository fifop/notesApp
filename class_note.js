class Note {
    constructor(parent,item) {
     this.parent= parent
      this.task = item.task;
      this.date = item.date;
      this.time = item.time;
      this.id = item.id;
      this.image = item.image;
    }
    
    renderHtml() {
        const div = document.createElement('div');
        div.classList.add('task');
        div.classList.add('bounce-in-fwd');
        div.style.backgroundImage= `${this.image}`
              document.querySelector(this.parent).append(div)
              div.innerHTML += `
        <h3>${this.task}</h3>
        <h3>${this.date}</h3>
        <h3>${this.time}</h3> 
        <button class="custom-button"  onclick="removeNote(${this.id})"> X </button>
      `;
    }
  }

  