import logo from "../../../assets/logo.svg"
import playstation from "../../../assets/playstation_and_text.svg"

export function About(){
    return(
        <>
            <div className="bg-[#01212f] h-[calc(100dvh-5rem)]">
                <div className="flex flex-col items-center justify-center py-10">
                    <div className="text-white text-5xl font-bold font-overpass tracking-wider">
                        About Helldivers <span className="font-russo">II</span>
                    </div>
                    <div className="flex mx-[20rem] gap-10 font-exo font-normal text-xl py-10 text-white">
                        <div className="flex flex-col w-[35rem] gap-5 tracking-wider">
                            <p>
                            HELLDIVERS II is a thirdperson shooter set in a satirical dystopian 
                            future where mankind is ruled by a managed <strong>democracy</strong>. You 
                            are part of the Helldivers – the spearhead of humanity’s 
                            defense against the perpetual alien threat on Super Earth.
                            </p>
                            <p>
                            With up to four player co-op missions, working together as a 
                            team is vital, whether calling in strikes or placing weapons, each 
                            action must be totally synchronized to achieve the objectives.
                            This isn’t just a four player co-op game; it’s a co-op game that
                            relies on the global efforts of the entire <strong>HELLDIVERS 2</strong> community!
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p>
                                <strong>
                                Publisher:
                                </strong>
                            <br/>
                                Sony Computer Entertainment America
                            </p>
                            <p>
                                <strong>
                                Genre:
                                </strong>
                            <br/>
                                Hardcore, Cooperative, Third-Person Shooter
                            </p>
                            <p>
                                <strong>
                                Players:
                                </strong>
                            <br/>
                            1 – 4, single and multiplayer
                            </p>
                            <p>
                                <strong>
                                Platforms:
                                </strong>
                            <br/>
                            PS5 and PC (Steam)
                            <br/>
                            Cross-play between PlayStation and PC
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex bg-sky-600 h-72 items-center justify-between px-72 my-auto">
                    <img src={logo} className="w-[35rem]"/>
                    <div className="flex items-center">
                        <img src={playstation} className="w-[35rem] fill-black"/>
                    </div>
                </div>
            </div>
        </>
    );
}