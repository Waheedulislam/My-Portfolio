import { Tooltip } from "react-tooltip";
import react from '../../assets/react.png'
import MongoDB from '../../assets/mongo-db.png'
import nodeJs from '../../assets/node-js.png'
import { SiExpress } from "react-icons/si";
const Tooltips = () => {
    return (
        <div className="flex gap-12">
            {/* Tooltip-1 */}
            <div>
                <Tooltip
                    anchorSelect=".my-anchor-element-1"
                    place="top"
                    className="tooltip-custom-1 rounded-full"
                >
                    <span className="font-semibold">MongoDB</span>
                </Tooltip>

                <a className="my-anchor-element-1">
                    <img className="h-12 w-12 mb-3" src={MongoDB} alt="" />
                    <span className="text-2xl font-bold tooltip-1-text ml-3">M</span>
                </a>

            </div>

            {/* Tooltip-2 */}
            <div>
                <Tooltip
                    anchorSelect=".my-anchor-element-2"
                    place="top"
                    className="tooltip-custom-2"
                >
                    <span className="font-semibold">Express.Js</span>
                </Tooltip>
                <a className="my-anchor-element-2">
                    <SiExpress className="h-12 w-14 text-white  mb-3" />

                    <span className="text-2xl font-bold text-white ml-3">E</span>
                </a>
            </div>
            {/* Tooltip-3 */}
            <div>
                <Tooltip
                    anchorSelect=".my-anchor-element-3"
                    place="top"
                    className="tooltip-custom-3"
                >
                    <span className="font-semibold">React.Js</span>
                </Tooltip>
                <a className="my-anchor-element-3">
                    <img className="h-12 w-12 mb-3" src={react} alt="" />
                    <span className="text-2xl font-bold tooltip-3-text ml-3">R</span>
                </a>
            </div>
            {/* Tooltip-4 */}
            <div>
                <Tooltip
                    anchorSelect=".my-anchor-element-4"
                    place="top"
                    className="tooltip-custom-4"
                >
                    <span className="font-bold">Node.Js</span>
                </Tooltip>
                <a className="my-anchor-element-4">
                    <img className="h-12 w-12 mb-3" src={nodeJs} alt="" />
                    <span className="text-2xl font-bold tooltip-4-text ml-3">N</span>
                </a>
            </div>
        </div >
    );
};

export default Tooltips;