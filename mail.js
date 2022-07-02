const firebaseConfig = {
    apiKey: "AIzaSyC9qnQJjdx7sYiuykt6eZCK6s4xM-jp-hA",
    authDomain: "humidityweb-6bdda.firebaseapp.com",
    databaseURL: "https://humidityweb-6bdda-default-rtdb.firebaseio.com",
    projectId: "humidityweb-6bdda",
    storageBucket: "humidityweb-6bdda.appspot.com",
    messagingSenderId: "860183740428",
    appId: "1:860183740428:web:d98d0ab3b2d18235c7ee29"
  };
//initillize the firebase
  firebase.initializeApp(firebaseConfig);

  // reference of the my datbase
  var  WebpageFirebaseDB = firebase.database().ref ("HUMIDITY ON & OFF");
  var  WebpageFirebaseDB1 = firebase.database().ref ("THRESHOLD VALUE");
  

  /*function submitForm(e){
    e.preventDefault();
    var btn1= getElementVal("btn1");
    var btn2= getElementVal("btn2");
    var input1=getElementVal("input1");
    //savemsg(btn1,btn2,input1);
    console.log(btn1,btn2,input1)
  }

  const getElementVal =(id) =>{
    return document.getElementById(id).value;
  }

  const savemsg=(btn1,btn2,input1)=>{
    var newhumidity = WebpageFirebaseDB.push();
    newhumidity.set({
        btn1:btn1,
        btn2:btn2,
        input1:input1,
    });
  }
  */
  const getValueInput = () =>{
    let inputValue = document.getElementById("btn2").value; 
    WebpageFirebaseDB.update({OFF:inputValue});
    console.log(inputValue)
  }

  const getValueInput1 = () =>{
    let inputValue1 = document.getElementById("btn1").value; 
    WebpageFirebaseDB.update({ON:inputValue1});
    console.log(inputValue1)
  }

  const getValueInput2 = () =>{
    let inputValue2 = document.getElementById("input1").value; 
    document.getElementById("input1").innerHTML =inputValue2
    WebpageFirebaseDB1.set({THRESHOLD:inputValue2});


    
    console.log(inputValue2)
  }

