import React from 'react';

function ninjas({ ninjas }) {

    const ninjaList = ninjas.map(ninja => {

        return ninja.age > 30 ? (
            <div className="id-card" key={ninja.id}>
                <div>name: {ninja.name}</div>
                <div>age:{ninja.age}</div>
                <div>Belt:{ninja.belt}</div>
            </div>
        ) : null


    })


    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    )

}

export default ninjas;