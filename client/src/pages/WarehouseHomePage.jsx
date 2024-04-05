import React, { useEffect, useState } from "react";

import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import WarehouseDetailsForm from "../components/WarehouseDetailsForm";
import { useSelector } from "react-redux";
import { Bar, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import Table from "../components/Table";
Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
);

const WarehouseHomePage = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [wareHouseDetails, setWareHouseDetails] = useState(null);

  const [transactionData, setTransactionData] = useState([]);

  console.log(wareHouseDetails);

  useEffect(() => {
    const getWarehouseDetails = async () => {
      try {
        if (currentUser && currentUser._id) {
          const res = await fetch(
            `/api/warehouse/warehouseDetails/${currentUser._id}`
          );
          if (!res.ok) {
            throw new Error("Failed to fetch");
          }
          const data = await res.json();
          console.log(data);
          setWareHouseDetails(data);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const getAllTransactions = async () => {
      try {
        if (currentUser && currentUser._id) {
          const res = await fetch(
            `/api/transaction/${currentUser._id}/getAllTransactions`
          );

          if (!res.ok) {
            throw new Error("Failed to fetch");
          }

          const data = await res.json();
          console.log(data);
          setTransactionData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getWarehouseDetails();
    getAllTransactions();
  }, [currentUser]);

  const toggleModal = () => {
    console.log("loop");
    setIsModalOpen(!isModalOpen);
    console.log("loop");
  };

  const handleSubmit = async (warehouseDetails) => {
    try {
      const response = await fetch(
        `/api/warehouse/warehouseDetails/${currentUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            // 'Authorization': `Bearer ${token}`, // If needed
          },
          body: JSON.stringify(warehouseDetails),
        }
      );

      if (!response.ok) throw new Error("Failed to save warehouse details");
      // Handle successful submission, e.g., close modal, show success message
      toggleModal();
      // Optionally, fetch updated data or trigger a state update to reflect changes in the UI
    } catch (error) {
      console.error("Error:", error);
      // Handle error, e.g., show error message to the user
    }
  };

  // Ensure wareHouseDetails is not null before accessing cropDetails
  const BarData = wareHouseDetails
    ? {
        labels: wareHouseDetails.cropDetails.map((detail) => detail.cropName),
        datasets: [
          {
            label: "Crop Quantity",
            data: wareHouseDetails.cropDetails.map(
              (detail) => detail.cropQuantity
            ),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              // Add more colors as needed
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              // Add more colors as needed
            ],
            borderWidth: 1,
          },
        ],
      }
    : null;

  const PieData = wareHouseDetails
    ? {
        labels: wareHouseDetails.cropDetails.map((detail) => detail.cropName),
        datasets: [
          {
            data: wareHouseDetails.cropDetails.map(
              (detail) => detail.cropQuantity
            ),
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              // Add more colors as needed
            ],
            hoverOffset: 4,
          },
        ],
      }
    : null;

  const StorageData = wareHouseDetails
    ? {
        labels: ["Total Storage Utilization"],
        datasets: wareHouseDetails.cropDetails.map((detail, index) => ({
          label: detail.cropName,
          data: [detail.cropQuantity],
          backgroundColor: [
            // Different color for each crop
            `rgba(255, 99, ${132 + index * 50}, 0.2)`,
          ],
          borderColor: [`rgba(255, 99, ${132 + index * 50}, 1)`],
          borderWidth: 1,
        })),
      }
    : null;

  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const data = wareHouseDetails
    ? {
        labels: wareHouseDetails.cropDetails.map((detail) => detail.cropName),
        datasets: [
          {
            data: wareHouseDetails.cropDetails.map(
              (detail) => detail.cropQuantity
            ),
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              // Add more colors as needed
            ],
            hoverOffset: 4,
          },
        ],
      }
    : null;

  <Doughnut data={data} />;

  const getTransactionColumns = () => [
    {
      Header: "Seller",
      // accessor: "otherParty.name",
      accessor: (row) => row.otherParty.name,
    },
    {
      Header: "Seller Email",
      accessor: (row) => row.otherParty.email,
    },
    {
      Header: "Buying Date",
      // accessor: "createdAt",
      accessor: (row) => row,
      Cell: ({ row }) => {
        // Assuming row.original contains the original row data
        const rowData = row?.original;
        console.log(rowData);
        
    
        // Define a helper function to format dates
        const formatDate = (dateString) => {
          if (!dateString) {
            return "----";
          }
          return new Date(dateString).toLocaleDateString("en-US", {
            timeZone: "Asia/Kolkata",
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        };
    
        // Use optional chaining to safely access createdAt, falling back to an empty string if undefined
        const buyingDate = rowData?.createdAt ? formatDate(rowData.createdAt) : '----';
    
        return <div>{buyingDate}</div>;
      },
    },    
    {
      Header: "Stock Bought KG",
      accessor: "quantityPurchased",
    },
    {
      Header: "Stock Remain In Market",
      accessor: (row) => row.cropSaleListing.quantity,
    },
    {
      Header: "Amount",
      accessor: "totalCost",
    },
    {
      Header: "Action",
      Cell: ({ cell }) => (
        <button onClick={() => onViewDetails(cell.row.original)}>View</button>
      ),
    },
  ];

  return (
    <>
      <div className=" bg-white  font-Poppins   pt-12 min-h-screen sm:pt-24">
        <div className="  h-56 flex flex-col items-center justify-center bg-gradient-to-r from-[#0F2027] via-[#23414B] to-[#2C5364]">
          <h1 className=" font-Grifter text-white text-[50px]">
            Visualizing warehouse restocking
          </h1>
          <h2 className=" text-[#9A9A9A] text-[20px]">
            Optimize your storage strategy with our analysis{" "}
          </h2>
        </div>
        <div className="  max-w-7xl mx-auto items-center">
          <div className=" w-full flex justify-between py-10">
            <div>
              <h1 className=" text-xl font-semibold">
                Warehouse :{" "}
                {wareHouseDetails ? wareHouseDetails.warehouseName : null}
              </h1>
              <h1 className=" text-xl font-semibold">
                Total Sapce :{" "}
                {wareHouseDetails
                  ? wareHouseDetails.warehouseTotalStorage
                  : null}
              </h1>
            </div>
            <div className=" flex flex-col gap-2">
              <button
                className=" px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
                onClick={toggleModal}
              >
                {wareHouseDetails
                  ? "Edit Warehouse Details"
                  : "Add Warehouse Details"}
              </button>
              <Link to="/warehouse-restock-page" className="inline-block">
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300">
                  Manage Restocking
                </button>
              </Link>
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <div className=" grid grid-cols-2   w-full gap-4 h-56">
              <div className=" w-full rounded-md flex items-center justify-center p-4 bg-gray-100 h-56">
                {BarData && <Bar data={BarData} />}
              </div>
              {/* <div className=" w-full rounded-md">{PieData && <Pie data={data} />}</div>
          <div className=" w-full rounded-md">{StorageData & <Bar data={data} options={options} />}</div> */}
              <div className=" w-full rounded-md flex items-center justify-center p-4 bg-gray-100 h-56">
                {data && <Doughnut data={data} />}
              </div>
            </div>
          </div>
          <div className=" flex justify-center py-8">
            <h1 className=" text-3xl">
              {transactionData ? "Your Purchase" : null}
            </h1>
          </div>
          <div className=" pb-20">
            <Table columns={getTransactionColumns()} data={transactionData} />
          </div>
          {/* <h1 className="text-2xl font-semibold">Warehouse Dashboard</h1> */}

          <WarehouseDetailsForm
            isOpen={isModalOpen}
            data={wareHouseDetails}
            onClose={toggleModal}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default WarehouseHomePage;
