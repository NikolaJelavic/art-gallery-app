import Image from "next/image"

export default function Spotlight({image,artist}) {

    return <>
    <h1>{artist}</h1>
    <Image src={image} alt={artist} width={300} height={200}/>
    </>
    
};
