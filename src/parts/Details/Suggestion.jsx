import React from "react";
import { Link } from "react-router-dom";
import formatCurrency from "../../helpers/format/currency";
function Suggestion(data) {
  return (
    <section className="bg-gray-100 px-4 py-16">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            Complete your room <br className="" />
            with what we designed
          </h3>
        </div>
        <div className="flex overflow-x-auto mb-4 -mx-3">
          {data.data?.map((item) => {
            return (
              <div key={item.id} className="px-3 flex-none" style={{ width: 320 }}>
                <div className="rounded-xl p-4 pb-8 relative bg-white">
                  <div className="rounded-xl overflow-hidden card-shadow w-full h-36">
                    <img src={item.imageUrl} alt={item.imageUrl} className="w-full h-full object-cover object-center" />
                  </div>
                  <h5 className="text-lg font-semibold mt-4">{item.title}</h5>
                  <span className="">{formatCurrency(item.price)}</span>
                  <Link to={`/categories/${item.idc}/products/${item.id}`} className="stretched-link"></Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Suggestion;
