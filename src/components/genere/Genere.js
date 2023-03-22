import React from "react";
import { useSelector } from "react-redux";

import "./genere.scss";

const Genere = ({ data }) => {
    const genere = useSelector((state) => state.home.genres); // using the genere for displaying genere name with respect to id
       console.log(genere)
    return (
        <div className="genres">
            {data?.map((g) => {
                if (!genere[g]?.name) return;
                return (
                    <div key={g} className="genre">
                        {genere[g]?.name}
                    </div>
                );
            })}
        </div>
    );
};

export default Genere;