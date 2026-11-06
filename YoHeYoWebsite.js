const issacInfoButton = document.getElementById('Issac');

const aceInfoButton = document.getElementById('Ace');

const ripcordInfoButton = document.getElementById('Ripcord');

const amplifireInfoButton = document.getElementById('Amplifire');

const slimeInfoButton = document.getElementById('Slime');

const dcalInfoButton = document.getElementById('D-Cal');

const figurinInfoButton = document.getElementById('Figurin');

const clothoInfoButton = document.getElementById('Clotho');

const hulaInfoButton = document.getElementById('Hula');

const popInfoButton = document.getElementById('Pop');

const bullettInfoButton = document.getElementById('Bullett');

const output = document.getElementById('issacInfoOutput', 'aceInfoOutput', 'ripcordInfoOutput', 'amplifireInfoOutput', 'slimeInfoOutput', 'dcalInfoOutput', 'figurinInfoOutput', 'clothoInfoOutput', 'hulaInfoOutput', 'popInfoOutput','bullettInfoOutput', 'minimiseOutput', 'closeBtn');

function handleIssacClick(){
    issacInfoOutput.textContent = "Initially known as a street performer named 'Yo Trickster', Issac fights with the Playrez to liberate Sunscorer City from the rising threat of the city going completely digital and people losing ownership of everything they hold dear.";

   const button = document.querySelector('.issacButton');

  button.addEventListener('click', function() {
    this.classList.toggle('grow');
}); 
  
  console.log('Hero selected: Yo He-Yo')

  
    document.getElementById('Issac').addEventListener('dblclick', function (){
      issacInfoOutput.textContent = '';
      console.log('Hero deselected')
    });

  /*This function (along with all the others) takes the ids and classes from the variables on top, searches for them in the HTML code and prints and removes text based on whether you do a single click (shown at the bottom of this entire code) or double click */
  
  
};

function handleAceClick(){
    aceInfoOutput.textContent = "User of the Playing Cards, Mikah is the leader and mastermind of the Playrez, fighting for what's right for the people of Sunscorer City and with immaculate plans.";
    
  
  console.log('Hero selected: Ace')
  
    document.getElementById('Ace').addEventListener('dblclick', function (){
      aceInfoOutput.textContent = '';
      console.log('Hero deselected')
    });
  
  
}; 

function handleRipcordClick(){
    ripcordInfoOutput.textContent = "User of Spinning Tops, Joss makes sure things go to plan and is always there to help other members of his team, using his spinning tops to cause chaos and dismay against T-Police.";
    
  
  console.log('Hero selected: Ripcord')
  
    document.getElementById('Ripcord').addEventListener('dblclick', function (){
      ripcordInfoOutput.textContent = '';
      console.log('Hero deselected')
    });
  
  
};

function handleAmplifireClick(){
    amplifireInfoOutput.textContent = "User of Music, Juma uses his voice, sounds and music to both harmonise people and cause disruption for his opponents, amplifying his sound prowess with the amplifier gear he wears.";
    
  
  console.log('Hero selected: Amplifire')
  
    document.getElementById('Amplifire').addEventListener('dblclick', function (){
      amplifireInfoOutput.textContent = '';
      console.log('Hero deselected')
    });
  
  
};

function handleSlimeClick(){
    slimeInfoOutput.textContent = "User of Slime, Luga lets her playful and hopeful spirit empower others as well as herself, staying positive even in the darkest of times. With her slime, she can change the shape of her limbs, whether to help or cause chaotic fun.";
    
  
  console.log('Hero selected: Slime')
    
    document.getElementById('Slime').addEventListener('dblclick', function (){
      slimeInfoOutput.textContent = '';
      console.log('Hero deselected')
    });
  
  
};

function handleDcalClick(){
    dcalInfoOutput.textContent = "User of Art and Stickers, Decina uses her artistic skills to create anything she wants and bring it into the real world, whether it be weapons, people or objects. As long as she draws it, she can bring it to existence.";
    
  
    console.log('Hero selected: D-Cal')
  
    document.getElementById('D-Cal').addEventListener('dblclick', function (){
      dcalInfoOutput.textContent = '';
      console.log('Hero deselected')
    });
  
  
};

function handleFigurinClick(){
    figurinInfoOutput.textContent = "User of Statues and Action Figures, Rin uses his proud collection of figures and borrows the abilities of the character they are based on.";

   
    
  
    console.log('Hero selected: Figurin')
  
    document.getElementById('Figurin').addEventListener('dblclick', function (){
      figurinInfoOutput.textContent = '';
      console.log('Hero deselected')
    });
  
  
};

function handleClothoClick(){
    clothoInfoOutput.textContent = "User of clothes and the Shadow Cloak, Ravia uses clothes to defend against opponents whilst looking stylish at once. She appears cold, but when clothes come in question, she doesn't hesistate to let her interests show.";
    
  
    console.log('Hero selected: Clotho')
  
    document.getElementById('Clotho').addEventListener('dblclick', function (){
      clothoInfoOutput.textContent = '';
      console.log('Hero deselected')
    });
  
  
};

function handleHulaClick(){
    hulaInfoOutput.textContent = "User of Rings, Hula Hoops or Bracelets, Sukari always wears jewelry and carries her hula hoops everywhere she goes, whether for traversing long distances or reaching far away by using them as portals.";
    
  
    console.log('Hero selected: Hula')
  
    document.getElementById('Hula').addEventListener('dblclick', function (){
      hulaInfoOutput.textContent = '';
      console.log('Hero deselected')
    });
  
  
};

function handlePopClick(){
    popInfoOutput.textContent = "User of Bubbles, Remie is usually seen with bubbles flying around her and chewing gum. The moment a bubble she creates bursts, chaos rips.";
    
  
    console.log('Hero selected: Pop')
  
    document.getElementById('Pop').addEventListener('dblclick', function (){
      popInfoOutput.textContent = '';
      console.log('Hero deselected')
    });
  
  
  
};

function handleBullettClick(){
    bullettInfoOutput.textContent = "User of Toy Guns and (occasionally) Toy Weapons, Ben is a wild card in the way he fights. He either revels unloading rounds of bullets, or is forced to act rationally.";
    
  
    console.log('Hero selected: Bullett')
  
    document.getElementById('Bullett').addEventListener('dblclick', function (){
      bullettInfoOutput.textContent = '';
      console.log('Hero deselected')
    });
  
  
};


issacInfoButton.addEventListener('click', handleIssacClick);
aceInfoButton.addEventListener('click', handleAceClick);
ripcordInfoButton.addEventListener('click', handleRipcordClick); 
amplifireInfoButton.addEventListener('click', handleAmplifireClick); 
slimeInfoButton.addEventListener('click', handleSlimeClick); 
dcalInfoButton.addEventListener('click', handleDcalClick); 
figurinInfoButton.addEventListener('click', handleFigurinClick); 
clothoInfoButton.addEventListener('click', handleClothoClick); 
hulaInfoButton.addEventListener('click', handleHulaClick); 
popInfoButton.addEventListener('click', handlePopClick); 
bullettInfoButton.addEventListener('click', handleBullettClick);



console.log('it somewhat works (for now)');