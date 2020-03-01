// creation de la classe produit

class produit {
  constructor(id, marque, couleur, prix, qte) {
    this.id = id;
    this.marque = marque;
    this.couleur = couleur;
    this.prix = prix;   
    this.qte = qte;
  }

  toString() {
    return " produit courant :  " + this.id + " " + this.marque + " " + this.couleur + " " + this.prix + " " + this.qte;
  }}


//utilisation de produit
let tabprod = [ new produit(1, "golf", "rouge", 50000, 0),
                new produit(2, "clio", "grise", 15000, 0),
                new produit(3, "407 peugeot", "bleue", 25000, 0),
                new produit(4, "modus", "blanche", 20000, 0),];



let x; // identifiant de produit
//let tcady = [new produit(0, " ", " ", 0, 0)];
let tcady = [];

//fonction pour afficher
function display() {
 
  tabprod.forEach(prod => console.log(prod.toString()));
}

//fonction pour afficher le contenu de cady
function displaycady() {
  tcady.forEach(prod => console.log(prod.toString()));
  
}

// fonction pour recuperer l'id d'un produit
let r = 0;
function getId(r) {
  for (let p of tabprod) {
    if (r == p.id) {
      p.qte = p.qte + 1;
      return p;


    }
  }
}
//fonction pour consituer le cady
function cady(r) {

   tcady.push(getId(r));
  //console.log(tcady.marque);
  return tcady;
}


// annuler une commande
function deleteOrder(r) {
  tcady.forEach(function (item, index, arry) {
     if(item.id == r ){
       if (item.qte > 1){
       item.qte = item.qte - 1;}
       else 
       if (item.qte == 1){
        tcady.splice(index, 1);
       }
     }
            
    });
}
//lancez une commande de produit choisis dans le cady
let tcommand = [];
function command() {
  let price = 0;
  let quantite = 0;
  let i = 0;
  let commande;
  tcady.forEach(function (item, index, arry){
    
    price = price + item.prix * item.qte;
    quantite++;
    console.log("votre commande :", item.id, " ", item.marque, " ", item.couleur, " ", item.prix * item.qte, " ", item.qte);
   
    tcommand[i] = [item.id, item.marque, item.couleur, item.prix *item.qte, item.qte]; 
    i++
  });
    //let qt = toString(quantite);
    //let pr = toString(price);    
    //let text1 = document.textContent;
    let text2 = "Vous avez commandé";
    let text1 = "Prix total de la commande: "
    let text3 = "  produits";
    document.getElementById('prod').innerHTML = text2;
    document.getElementById('resum').innerHTML = text1;
    document.getElementById('fin').innerHTML = text3;
    document.getElementById('resumec').innerHTML = quantite;
    document.getElementById('total').innerHTML = price;
        
  return tcommand;
}
  
  function affichCommande(){
    command();
       
  }


let table = document.querySelector("table"); // definir le tableau paramètre de la foncion de creation de tableau sur html
let data = Object.keys(tabprod[0]);    
// la fonction pour generer l'entete de tableau dans html
function generateTableHead(table){
  let thead = table.createTHead();
  let row = thead.insertRow();
  for(let key of data){
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

//generer le tableau dans html

function generateTable(table, data){
  for (let element of data)
  {
    let row = table.insertRow();
     for (key in element) {
       let cell = row.insertCell();
       let text = document.createTextNode(element[key]);
       cell.appendChild(text);
     }
  }
}

//message de bienvenu

//alert("bienvenue dans notre site");
let choix = 10;

while (choix != 0) {

  choix = parseInt(prompt("1: afficher votre produit \n 2: voir cady \n 3: ajouter au cady \n 4: supprimer de cady \n 5:commander \n 0: quitter"));
 //document.getElementById(choix).innerHTML += '1: afficher votre produit \n 2: voir cady \n 3: ajouter au cady \n 4: supprimer de cady \n 5:commander \n 0: quitter';

  if (choix == 1) {
    //afficher les produits
    //display();
    //let affiche ='<h2> affiche la liste de produits</h2>';
    //document.getElementById('affich').innerHTML = affiche;   
    alert("LISTE DE PRODUITS")                              
 generateTableHead(table, data);
 generateTable(table,tabprod);
    // ajouterLigne();
 
  }
  else
    if (choix == "2") {
      //afficher le cady
      //displaycady();
       alert("CONTENU DE VOTRE PANIER")                            
 generateTableHead(table, data);
 generateTable(table,tcady);
 
    }
    
    else if (choix == "3") {

      // ajouter un produit au cady     
      
      let identifiant = prompt("donner l'dentifient de produit à ajouter");
      cady(parseInt(identifiant));
      generateTableHead(table, data);
      generateTable(table,tcady);   
          }

    //supprimer un element de cady
    else if (choix == "4") {
      console.log("would you like delete this ordered");
      let identifiant = prompt("donner l'dentifient de produit à supprimer");
      deleteOrder(parseInt(identifiant));
    }
    // acheter le liste de cady qui existe dans le cady

    else if (choix == "5") {
      //let i = 0;
      console.log("lancez une commande");
       
       let texcommande ='<h2> RESUME DE VOTRE COMMANDE</h2>';   //a faire creer une fonction por afficher la phrase de coomande
       document.getElementById('MaDiv').innerHTML = texcommande;
       command(); 
       generateTableHead(table, data);
       generateTable(table,tcommand);  
          
      if (confirm("voulez vous confirmez votre commande")){
        alert("Votre Commande est confirmée")}
        else {alert("Votre Commande est annuleé")};

      
    }
}
