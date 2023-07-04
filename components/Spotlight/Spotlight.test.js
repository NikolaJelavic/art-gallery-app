import Spotlight from "./Spotlight";
import {render,screen} from "@testing-library/react";

test("renders image and artist",()=>{
    render(<Spotlight image="https://example-apis.vercel.app/assets/art/man-digital-illustration.jpg" artist="Rachel Claire" />)
    const artist = screen.getByText("Rachel Claire",{
        artist:"Rachel Claire"
    });
    const imageExample = screen.getByRole("img",{
        image:"https://example-apis.vercel.app/assets/art/man-digital-illustration.jpg"
    });
    expect(imageExample).toBeInTheDocument();
    expect(artist).toBeInTheDocument();
})