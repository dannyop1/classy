import React, { useEffect, useState } from "react";
import InnerHeader from "../../common/InnerHeader";
import * as MdIcons from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { GetClass } from "../../../redux/actions/classactions";
import { GET_DETAILS } from "../../../redux/actions/student/studentactions";
import { Line, Column, Bar } from "@ant-design/charts";
import { Select } from "antd";

function Statistics() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    dispatch(GetClass());
    dispatch(GET_DETAILS("/student", "GET_STUDENT_DETAIL"));
    dispatch(GET_DETAILS("/teacher", "GET_TEACHER_DETAIL"));

   
    setUserData([
      { day: "Day", value: 300 },
      { day: "Week", value: 800 },
      { day: "Month", value: 2700 },
      { day: "Year", value: 5000 },
      
    ]);

    setRevenueData([
      { day: "Day", value: 500 },
      { day: "Week", value: 3200 },
      { day: "Month", value: 12700 },
      { day: "Year", value: 127000 },
      
    ]);
  }, [dispatch]);

  const { adminfilternotices } = useSelector((state) => state.admins);
  const { teacherDetail } = useSelector((state) => state.teachers);
  const { student } = useSelector((state) => state.students);
  const adminnotices = adminfilternotices && adminfilternotices.results;

  const filterDataByDay = (data, selectedDay) => {
    if (!selectedDay) {
      return data;
    }

    return data.filter((item) => item.day === selectedDay);
  };

  return (
    <div>
      <InnerHeader icon={<MdIcons.MdDashboard />} name={"Dashboard"} />
      <div className="main-content">
      <div className="chart-section">
        <div className="day-selector">
          <Select
            value={selectedDay}
            onChange={(value) => setSelectedDay(value)}
            style={{ width: 120 }}
          >
            <Select.Option value="">All Days</Select.Option>
            <Select.Option value="Day">Day</Select.Option>
            <Select.Option value="Week">Week</Select.Option>
            <Select.Option value="Month">Month</Select.Option>
            <Select.Option value="Year">Year</Select.Option>
          </Select>
          </div>
      
          <div className="chart">
            <h3>User Registration</h3>
            <Bar data={filterDataByDay(userData, selectedDay)} xField="day" yField="value" />
          </div>

          <div className="chart">
            <h3>Revenue</h3>
            <Column data={filterDataByDay(revenueData, selectedDay)} xField="day" yField="value" />
          </div>
        </div>

        <div className="card-section">
          
        </div>
      </div>
    </div>
  );
}

export default Statistics;