// resources/js/Components/SelectiveDropdown.jsx

const DepartmentDropdown = ({ value, onChange }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <select
            value={value}
            onChange={handleChange}
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
            <option value="1">Web Development</option>
            <option value="2">mobile App</option>
            <option value="3">UI/UX</option>
            <option value="4">Graphics Designing</option>

            {/* Add more options for other user types as needed */}
        </select>
    );
};

export default DepartmentDropdown;
