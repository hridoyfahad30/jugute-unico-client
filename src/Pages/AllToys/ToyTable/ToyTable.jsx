import React from "react";
import toy from '../../../assets/slider_7.jpg'

const ToyTable = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th className="text-center">View Details</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
            <div className="font-bold">Hart Hagerty</div>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                  <div className="font-bold">Hart Hagerty</div>
              </div>
            </td>
            <td>
              <span className="badge badge-ghost badge-sm text-base">
                Desktop Support Technician
              </span>
            </td>
            <td>
              <span className="badge badge-ghost badge-sm">
                $535
              </span>
            </td>
            <td>234533</td>
            <th className="text-center">
              <button className="btn bg-green-700 hover:bg-green-600 border-none btn-xs">View Details</button>
            </th>
          </tr>          
          
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ToyTable;
