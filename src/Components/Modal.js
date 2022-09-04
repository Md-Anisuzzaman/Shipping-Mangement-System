
const Modal = ({ modalShow, setModalShow }) => {
    
    return (
        <div>

            <div className=" absolute top-0 left-0 right-0 z-0 margin-auto bg-white flex justify-center items-center flex-col mt-6 py-5 border shadow-lg m-auto w-5/12">
                <h1 className="text-3xl text-indigo-800">Booking Form</h1>
                <form className=" my-5 px-5 flex justify-center items-left flex-col w-full" action="">
                    <input className="border-2 rounded py-3 px-2 my-3" type="datetime-local" name="" id="" />
                    <input className="border-2 rounded py-3 px-2 my-3" type="number" name="" placeholder="Time" />
                    <input className="border-2 rounded py-3 px-2 my-3" type="number" name="" placeholder="Duration" />
                </form>
                <button onClick={() => setModalShow(false)} className="rounded px-5 py-2 text-white text-lg bg-blue-500" type="submit">Submit</button>

            </div>

        </div>
    )
}
export default Modal