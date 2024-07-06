// resources/js/Components/SelectiveDropdown.jsx

const SelectiveDropdown = ({ value, onChange }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <select
            value={value}
            onChange={handleChange}
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
            {/* <option value="admin">Admin</option>
            <option value="hr">HR</option> */}
            <option value="department_manager">Department Manager</option>
            <option value="employee">Employee </option>

            {/* Add more options for other user types as needed */}
        </select>
    );
};

export default SelectiveDropdown;
