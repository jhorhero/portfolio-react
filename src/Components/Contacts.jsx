

const Contacts = () => {
    return (
        <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl py-4 font-bold text-center text-[#001b5e]">Contact</h1>
            <form action="https://getform.io/f/e397ee8d-f1a5-4de1-a33b-01f87be46b4d" method="post" encType="multipart/form-data">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                        <label  className="uppercase text-sm py-2" htmlFor="">Name</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="name" />
                    </div>
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2" htmlFor="">Phone</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300"  type="text" name="number" />
                    </div>
                    <div className="flex flex-col ">
                        <label className="uppercase text-sm py-2" htmlFor="">Email</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300"  type="email" name="email" id="" />
                    </div>
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2" htmlFor="">Subject</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300"  type="text" name="subject" id="" />
                    </div>
                    
                   
                </div>
                <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2" htmlFor="">Message</label>
                        <textarea className="border-2 rounded-lg p-3 flex border-gray-300" rows='10' name="message" id="" />
                    </div>
                    <button className="bg-blue-600 text-gray-100 mt-4 p-4 w-full rounded-lg">Send Message</button>
            </form>
        </div>
    );
};

export default Contacts;