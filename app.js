const saveToDb = db => {
    const dbString = JSON.stringify( db );
    localStorage.setItem( 'shopping-cart', dbString );
}

const getDb = () => {
    const db = localStorage.getItem( 'shopping-cart' );
    const savedDb = JSON.parse( db );
    return savedDb;

}

const addToDb = item => {
    let db = {};
    if ( getDb() ) {
        db = getDb();
    }

    if ( item in db ) {
        db[ item ] = db[ item ] + 1;
    }
    else {
        db[ item ] = 1;
    }
    saveToDb( db );
}

const removeFromDb = item => {
    const db = getDb();
    delete db[ item ];
    saveToDb( db );
}