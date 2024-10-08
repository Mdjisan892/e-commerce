
const ReportForm = () => {
    return (
  
      <div className="flex items-center justify-center min-h-screen mt-8 bg-gray-100">
        <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Report User</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                User to Report
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter username"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="reason">
                Reason for Reporting
              </label>
              <select
                id="reason"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
              >
                <option value="spam">Spam</option>
                <option value="abuse">Abusive Behavior</option>
                <option value="inappropriate">Inappropriate Content</option>
              </select>
            </div>
  
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                rows="4"
                placeholder="Provide more details"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full py-2 font-semibold text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Submit Report
            </button>
          </form>
        </div>
      </div>
    );
    
  }
  
  export default ReportForm