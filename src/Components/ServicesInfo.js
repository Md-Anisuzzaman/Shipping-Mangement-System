import { useState } from "react";
import Modal from "./Modal";


const ServicesInfo = () => {

    const [modalShow, setModalShow] = useState(false)




    return (
        <div className="flex bg-teal-900 justify-center items-center py-9 ">
            {/* {
                modalShow === true && <Modal modalShow={modalShow} setModalShow={setModalShow} />
            } */}

            {/* font-[Poppins] -2 -teal-200 */}
            <table className="shadow-2xl w-6/12 overflow-hidden">
                <thead className="text-white">
                    <tr>
                        <th className="py-2 bg-teal-800">Id No:</th>
                        <th className="py-2 bg-teal-800">V-Name</th>
                        <th className="py-2 bg-teal-800">Status</th>
                        <th className="py-2 bg-teal-800">Will Free</th>
                        <th className="py-2 bg-teal-800">Description</th>
                        <th className="py-2 bg-teal-800">Action</th>
                    </tr>
                </thead>
                <tbody className="text-center text-indigo-900" >
                    <tr className="bg-teal-200 hover:bg-teal-100 hover:scale-105  cursor-pointer duration-300">
                        <td className="py-2 px-6">1</td>
                        <td className="py-2 px-6">T1</td>
                        <td className="py-2 px-6">Busy</td>
                        <td className="py-2 px-6">30 min later</td>
                        <td className="py-2 px-6">size: 16 <br /> capacity: 2 Ton </td>
                        <td><button onClick={() => setModalShow(true)} className="py-2 px-6 text-yellow-900">Book Now</button></td>


                    </tr>
                    <tr className="bg-teal-300 hover:bg-teal-100 hover:scale-105  cursor-pointer duration-300">
                        <td className="py-2 px-6">1</td>
                        <td className="py-2 px-6">T1</td>
                        <td className="py-2 px-6">Busy</td>
                        <td className="py-2 px-6">30 min later</td>
                        <td className="py-2 px-6">size: 16 <br /> capacity: 2 Ton </td>
                        <td><button className="py-2 px-6 text-yellow-900">Book Now</button></td>
                    </tr>
                    <tr className="bg-teal-400 hover:bg-teal-100 hover:scale-105  cursor-pointer duration-300">
                        <td className="py-2 px-6">1</td>
                        <td className="py-2 px-6">T1</td>
                        <td className="py-2 px-6">Busy</td>
                        <td className="py-2 px-6">30 min later</td>
                        <td className="py-2 px-6">size: 16 <br /> capacity: 2 Ton </td>
                        <td><button className="py-2 px-6 text-yellow-900">Book Now</button></td>




                    </tr>
                </tbody>
            </table>

        </div>
    )
}
export default ServicesInfo