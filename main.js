var config = {
    apiKey: "AIzaSyCZRZjcpCLuydPEw4aGP_vdpIc7Mlnwn70",
    authDomain: "biblorock.firebaseapp.com",
    databaseURL: "https://biblorock.firebaseio.com",
    projectId: "biblorock",
    storageBucket: "biblorock.appspot.com",
    messagingSenderId: "821897959326"
};
firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();

$("#login").click(function(){
    firebase.auth()
        .signInWithPopup(provider)
        .then(function(result){
            console.log(result.user);
            $("#login").hide();
            guardarDatos(result.user);
        });
});

function guardarDatos(user){
    var usuario = {
        uid:user.uid,
        nombre:user.displayName,
        email:user.email,
        foto:user.photoURL,
        certified:false
    }
    firebase.database().ref("usuarios/"+user.uid).set(usuario);
}