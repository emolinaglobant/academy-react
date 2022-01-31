const name1 = 'Jack Ryan Froy';

function initializeNames(name){
    
    let initializedName = name.split(' ');

    if( (typeof(initializedName[1]) === 'undefined') || (typeof(initializedName[2]) === 'undefined')) {

        return name;

    } else if( (typeof(initializedName[2]) !== 'undefined') && (typeof(initializedName[3]) === 'undefined') ) {

        initializedName[1] = initializedName[1].charAt(0).concat('.');

        name = initializedName.join(' ');
        return name;
        
    } else if( (typeof(initializedName[2]) !== 'undefined') && (typeof(initializedName[3]) !== 'undefined') ) {

        initializedName[1] = initializedName[1].charAt(0).concat('.');
        initializedName[2] = initializedName[2].charAt(0).concat('.');

        name = initializedName.join(' ');
        return name;
    } 
}

initializeNames(name1);