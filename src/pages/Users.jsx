import React from 'react'

const Users = ({ setProgress }) => {

    React.useEffect(() => {
        setProgress(20)
        setTimeout(() => {
            document.title = `Portfolio | Users Page`;
            setProgress(100)
        }, 500);
    }, [])

    return (
        <div className="h-screen w-[95dvw] md:w-screen md:px-32 py-10 mb-20 px-5 ">

            <div className="relative overflow-auto shadow-md sm:rounded-lg mx-auto h-screen ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                    <thead className="text-xs   uppercase   bg-primaryBg  text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Avatar
                            </th>
                            <th scope="col" className="px-6 py-3">
                                name
                            </th>
                            <th scope="col" className="px-6 py-3">
                               email
                            </th>
                            <th scope="col" className="px-6 py-3">
                              password
                            </th>
                        
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="  border-b  bg-secBg  border-primaryBg   hover:bg-gray-600">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               <img 
                               className='w-9 h-9 rounded-full'
                               src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1704240000&semt=ais" alt="avatar" />
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               John
                            </th> 
                            <td className="px-6 py-4">john@gmail.com</td>
                            <td className="px-6 py-4">kj*/434/'df3</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium  text-secMain hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr> 
                        <tr className="  border-b  bg-secBg  border-primaryBg   hover:bg-gray-600">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               <img 
                               className='w-9 h-9 rounded-full'
                               src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1704240000&semt=ais" alt="avatar" />
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               John
                            </th> 
                            <td className="px-6 py-4">john@gmail.com</td>
                            <td className="px-6 py-4">kj*/434/'df3</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium  text-secMain hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr> 
                        <tr className="  border-b  bg-secBg  border-primaryBg   hover:bg-gray-600">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               <img 
                               className='w-9 h-9 rounded-full'
                               src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1704240000&semt=ais" alt="avatar" />
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               John
                            </th> 
                            <td className="px-6 py-4">john@gmail.com</td>
                            <td className="px-6 py-4">kj*/434/'df3</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium  text-secMain hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr> 
                        <tr className="  border-b  bg-secBg  border-primaryBg   hover:bg-gray-600">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               <img 
                               className='w-9 h-9 rounded-full'
                               src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1704240000&semt=ais" alt="avatar" />
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               John
                            </th> 
                            <td className="px-6 py-4">john@gmail.com</td>
                            <td className="px-6 py-4">kj*/434/'df3</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium  text-secMain hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr> 
                        <tr className="  border-b  bg-secBg  border-primaryBg   hover:bg-gray-600">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               <img 
                               className='w-9 h-9 rounded-full'
                               src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1704240000&semt=ais" alt="avatar" />
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               John
                            </th> 
                            <td className="px-6 py-4">john@gmail.com</td>
                            <td className="px-6 py-4">kj*/434/'df3</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium  text-secMain hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr> 
                        <tr className="  border-b  bg-secBg  border-primaryBg   hover:bg-gray-600">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               <img 
                               className='w-9 h-9 rounded-full'
                               src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1704240000&semt=ais" alt="avatar" />
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               John
                            </th> 
                            <td className="px-6 py-4">john@gmail.com</td>
                            <td className="px-6 py-4">kj*/434/'df3</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium  text-secMain hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr> 
                        <tr className="  border-b  bg-secBg  border-primaryBg   hover:bg-gray-600">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               <img 
                               className='w-9 h-9 rounded-full'
                               src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1704240000&semt=ais" alt="avatar" />
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               John
                            </th> 
                            <td className="px-6 py-4">john@gmail.com</td>
                            <td className="px-6 py-4">kj*/434/'df3</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium  text-secMain hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr> 
                        <tr className="  border-b  bg-secBg  border-primaryBg   hover:bg-gray-600">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               <img 
                               className='w-9 h-9 rounded-full'
                               src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1704240000&semt=ais" alt="avatar" />
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               John
                            </th> 
                            <td className="px-6 py-4">john@gmail.com</td>
                            <td className="px-6 py-4">kj*/434/'df3</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium  text-secMain hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr> 
                        <tr className="  border-b  bg-secBg  border-primaryBg   hover:bg-gray-600">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               <img 
                               className='w-9 h-9 rounded-full'
                               src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1704240000&semt=ais" alt="avatar" />
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               John
                            </th> 
                            <td className="px-6 py-4">john@gmail.com</td>
                            <td className="px-6 py-4">kj*/434/'df3</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium  text-secMain hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr> 
                        <tr className="  border-b  bg-secBg  border-primaryBg   hover:bg-gray-600">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               <img 
                               className='w-9 h-9 rounded-full'
                               src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1704240000&semt=ais" alt="avatar" />
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               John
                            </th> 
                            <td className="px-6 py-4">john@gmail.com</td>
                            <td className="px-6 py-4">kj*/434/'df3</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium  text-secMain hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr> 
                        <tr className="  border-b  bg-secBg  border-primaryBg   hover:bg-gray-600">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               <img 
                               className='w-9 h-9 rounded-full'
                               src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1704240000&semt=ais" alt="avatar" />
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               John
                            </th> 
                            <td className="px-6 py-4">john@gmail.com</td>
                            <td className="px-6 py-4">kj*/434/'df3</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium  text-secMain hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr> 
                        <tr className="  border-b  bg-secBg  border-primaryBg   hover:bg-gray-600">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               <img 
                               className='w-9 h-9 rounded-full'
                               src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1704240000&semt=ais" alt="avatar" />
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               John
                            </th> 
                            <td className="px-6 py-4">john@gmail.com</td>
                            <td className="px-6 py-4">kj*/434/'df3</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium  text-secMain hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr> 
                        <tr className="  border-b  bg-secBg  border-primaryBg   hover:bg-gray-600">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               <img 
                               className='w-9 h-9 rounded-full'
                               src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1704240000&semt=ais" alt="avatar" />
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               John
                            </th> 
                            <td className="px-6 py-4">john@gmail.com</td>
                            <td className="px-6 py-4">kj*/434/'df3</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium  text-secMain hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr> 
                        <tr className="  border-b  bg-secBg  border-primaryBg   hover:bg-gray-600">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               <img 
                               className='w-9 h-9 rounded-full'
                               src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1704240000&semt=ais" alt="avatar" />
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               John
                            </th> 
                            <td className="px-6 py-4">john@gmail.com</td>
                            <td className="px-6 py-4">kj*/434/'df3</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium  text-secMain hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr> 
                        <tr className="  border-b  bg-secBg  border-primaryBg   hover:bg-gray-600">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               <img 
                               className='w-9 h-9 rounded-full'
                               src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1704240000&semt=ais" alt="avatar" />
                            </th>
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                               John
                            </th> 
                            <td className="px-6 py-4">john@gmail.com</td>
                            <td className="px-6 py-4">kj*/434/'df3</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium  text-secMain hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr> 
                    </tbody>
                </table>
            </div>

        </div>

    )
}

export default Users
