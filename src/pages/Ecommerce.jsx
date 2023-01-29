import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import React, { useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine, LineChart } from "../components";
import { useStateContext } from "../context/ContextProvider";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
  dropdownData,
  recentTransactions,
} from "../data/dummy";

const DropDown = () => {
  const [selected, setSelected] = useState(dropdownData[0].Time);

  const onChangeDropdown = (e) => {
    setSelected(e.target.value);
  };
  return (
    <div className="w-32 border-1 border-color px-1 py-1 rounded-md">
      <select
        id="countries"
        className="bg-gray-50
       text-gray-900 text-sm focus:white
        w-full p-2.5
        border-none
        dark:bg-secondary-dark-bg
        dark:border-gray-600
        dark:placeholder-gray-400
        dark:text-white 
        "
        value={selected}
        onChange={onChangeDropdown}
      >
        {dropdownData.map((item) => (
          <option key={item.Id} value={item.Id}>
            {item.Time}
          </option>
        ))}
      </select>
    </div>
  );
};

const Ecommerce = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="mt-24">
      <div className="flex flex-wrap md:flex-nowrap justify-center w-100">
        <div className="h-44 bg-slate-800 bg-hero-pattern rounded-xl w-full lg:w-80 p-8 pt-9 m-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
            <Button
              backgroundColor={currentColor}
              color="white"
              size="2xl"
              text={<BsCurrencyDollar />}
              borderRadius="9999px"
            />
          </div>
          <div className="mt-6">
            <Button
              backgroundColor={currentColor}
              color="white"
              size="base"
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center m-3 gap-1">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="h-44 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
            md:w-56 p-4 pt-9 rounded-2xl"
            >
              <Button
                backgroundColor={item.iconBg}
                color={item.iconColor}
                size="2xl"
                text={item.icon}
                borderRadius="9999px"
              />
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span
                  className={`text-sm font-base ml-2 ${
                    item.percentage.startsWith("+")
                      ? "text-green-700"
                      : "text-red-600"
                  } `}
                >
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        {/* Revenue Updates*/}
        <div
          className="bg-blue dark:text-gray-200 dark:bg-secondary-dark-bg 
          m-3 p-4 rounded-2xl md-w-780"
        >
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl ">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl ">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 cursor-pointer hover:drop-shadow rounded-full text-white bg-green-400 ml-3">
                    23%
                  </span>
                </p>
                <p className="mt-1 text-gray-500">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48,487</span>
                </p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  color={currentColor}
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                />
              </div>
              <div className="mt-10">
                <Button
                  backgroundColor={currentColor}
                  color="white"
                  size="base"
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360" />
            </div>
          </div>
        </div>
        {/* Monthly revenue earnings*/}
        <div>
          <div
            className="rounded-2xl md:w-400 p-4 m-3"
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex justify-between item-center">
              <p className="font-semibold text-white text-2xl">Earnings</p>
              <div className="mt-8">
                <p className="text-3xl font-semibold">$63,448.78</p>
                <p className="text-gray-200">Monthly revenue</p>
              </div>
            </div>
            <div className="mt-4">
              <SparkLine
                currentColor={currentColor}
                id="column-sparkLine"
                height="100px"
                type="Column"
                data={SparklineAreaData}
                width="320"
                color="rgb(242, 252, 253)"
              />
            </div>
          </div>
          {/* Yearly Sales*/}
          <div
            className="flex items-center justify-center bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
          rounded-2xl md:w-400 p-8 m-3 gap-10  "
          >
            <div>
              <p className="text-3xl font-semibold">$43,246</p>
              <p className="text-gray-400">Yearly Sales</p>
            </div>
            <div className="w-40">
              <Pie
                id="pie-chart"
                data={ecomPieChartData}
                legendVisiblity={false}
                height="160px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-4 flex-wrap justify-center">
        {/* Recent Transactions */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Recent Transactions</p>
            <div className="w-36 px-2 py-1 rounded-md border-color">
              <DropDown />
            </div>
          </div>

          <div className="mt-10 w-72 md:w-400">
            {recentTransactions.map((item) => (
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    style={{
                      backgroundColor: item.iconBg,
                      color: item.iconColor,
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-base text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <div
                  className={`${
                    item.amount.startsWith("+")
                      ? "text-green-700"
                      : "text-red-600"
                  }`}
                >
                  {item.amount}
                </div>
              </div>
            ))}
          </div>
          {/* ADD */}
          <div
            className="flex mt-5 justify-between items-center
             border-color
              border-t-1 "
          >
            <button className="mt-3">
              <div
                className="p-3 text-base text-white rounded-lg "
                style={{ background: currentColor }}
              >
                Add
              </div>
            </button>
            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
