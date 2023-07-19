// DOM ETIKETLERIYLE CALISMAK

let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick)


function domClick() {
    console.log("etkinlik denetlendi")
    this.style.color=="red"? this.style.color = "black" : this.style.color= "red"
}



// -------------------------------------------------------------------------------------------------------------------

// element.addEventListener(event, functionName);
// //id =button olan nesne seçildi
// const button = document.querySelector("#button");
// //nesneye bir etkinlik atandı.Burada ilk olarak tip ('click')
// //ikinci olarak da aşağıda fonksiyon tanımlanır ,fonksiyon ismi parametre olarak girilir. 
// button.addEventListener('click',btnClicked);
//   function btnClicked(){
//     alert("Buton Tıklandı!!!")
//     }

// // Çıktı : Buton Tıklandı!!!

// -------------------------------------------------------------------------------------------------------------------

// //id=text olan buton çağrıldı
// //dblclick=çift tıklama etkinliği nesneye atandı,fonksiyon ismi parametre olarak tanımlandı
// const button = document.querySelector("#text");
// button.addEventListener('dblclick',clickFonksiyonu);
  
// //fonksiyonda id=text olan element çağrılarak innerHTML ile içeriği değiştirildi.
// function clickFonksiyonu(){
//   document.getElementById("text").innerHTML = "NEW FORM";
//   }

// -------------------------------------------------------------------------------------------------------------------

// //id=fname olan nesne çağrılarak keyboard değişkenine atandı
// const keyboard =document.querySelector('#fname');
// //keyboard isimli değişkene "cut" etkinliği atandı ve fonksiyon ismi parametre olarak atandı
// keyboard.addEventListener("cut",cuttingFunction);
// //cuttingFunction isimli fonksiyon ile form inputuna yazılan girdileri klavye ctrl+c ile kesildiğinde etkinlik çalışmaktadır
// function cuttingFunction(event){
//   console.log("etkinlik tipi: " , event.type)
//   } 
  
// //console ekranı : etkinlik tipi: cut

// -------------------------------------------------------------------------------------------------------------------

/* <form action="#" id="selectColor">
  <label for="color">Choose a color</label>
    <select name="colors" id="select">
      <option value="red">RED</option>
      <option value="blue">BLUE</option>
      <option value="purple">PURPLE</option>
      <option value="orange">ORANGE</option>
      <option value="pink">PINK</option>
    </select>
    <br><br>
  <input type="submit" value="Submit">
</form>   
      
//id=select olan nesne çağrılarak color değişkenine atandı
const color = document.querySelector("#select");
//color değişkenine change etkinliği etkinliği atandı ve fonksiyon ismi parametre olarak atandı
color.addEventListener('change' ,selectBox);

//selectBox isimli fonksiyon ile selectbox her seçildiğinde etkinlik tipi =change ve değeri consola yazılmaktadır 
function selectBox(event){
  console.log("Etkinlik tipi : " + event.type);
  console.log("deger : " + event.target.value);
  }
  
// Selectbox içinde "blue" değerini seçtiğimiz takdirde;
// ekran çıktısı: Etkinlik tipi : change, deger : blue */

// -------------------------------------------------------------------------------------------------------------------

// element.addEventListener(event, function);

// -------------------------------------------------------------------------------------------------------------------

/* <div class="container">  
  <div><p id="text">SUBMIT FORM </p> </div>
    <form action="/action_page.php" class="inputText">
      <label for="fname" id="l1">First name:</label><br>
      <input type="text" id="fname" name="fname" value="John" > <br>
      <label for="lname" id="l2">Last name:</label><br>
      <input type="text" id="lname" name="lname" value="Doe" id="label2"><br><br>
    </form>
    <button type="button" id="button" >Clicked me </button>
    <form action="#" id="selectColor">
      <label for="color">Choose a color</label>
        <select name="colors" id="select">
        <option value="red">RED</option>
        <option value="blue">BLUE</option>
        <option value="purple">PURPLE</option>
        <option value="orange">ORANGE</option>
        <option value="pink">PINK</option>
      </select>
    <br><br>
    </form>
  </div>
</div>
  
// iç içe elementler çağrıldı  
const selectBox = document.querySelector('#selectColor');
const button = document.querySelector('#button');
const form = document.querySelector('.inputText');  
const cerceve = document.querySelector('.container');
selectBox.addEventListener('click' ,function(){
    console.log("selectBox");    
    })
form.addEventListener('click',function(){
    console.log("form");
    })
cerceve.addEventListener('click',function(){
    console.log('cerceve');
    }) */

// -------------------------------------------------------------------------------------------------------------------

// element.addEventListener(event, function, useCapture);

// -------------------------------------------------------------------------------------------------------------------

// event.stopPropagation();

// -------------------------------------------------------------------------------------------------------------------

// event.preventDefault();