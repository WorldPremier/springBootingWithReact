import { Carousel } from "./Componenets/Carousel";
import { ExploreTopBooks } from "./Componenets/ExploreTopBooks";
import { Heros } from "./Componenets/Heros";
import { LibraryServices } from "./Componenets/LibraryServices";

export const HomePage = ()=>{
    return(
            <>
                <ExploreTopBooks/>
                <Carousel/>
                <Heros/>
                <LibraryServices/>
            </>
    );
}