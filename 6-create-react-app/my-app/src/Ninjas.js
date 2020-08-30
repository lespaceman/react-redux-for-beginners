import React from 'react';

function ninjas({ ninjas, deleteNinja }) {

    const ninjaList = ninjas.map(ninja => {

        if (ninja.age < 30) {
            return (
                <div className="id-card" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age:{ninja.age}</div>
                    <div>Belt:{ninja.belt}</div>
                    <button onClick={() => { deleteNinja(ninja.id) }}>Delete</button>
                </div>
            )
        } else {
            return null
        }

    })

    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    )

}

export default ninjas;