import React, { useEffect, useState } from "react";
import InnerHeader from "../../common/InnerHeader";
import * as MdIcons from "react-icons/md";
import { useDispatch } from "react-redux";
import { GetClass } from "../../../redux/actions/classactions";
import { GET_DETAILS } from "../../../redux/actions/student/studentactions";
import { Line } from '@ant-design/plots';
import { Select } from "antd";

function Statistics() {
  const dispatch = useDispatch();
  const [userDataStudent, setUserDataStudent] = useState([]);
  const [userDataTeacher, setUserDataTeacher] = useState([]);
  const [userDataTeacherMonth, setUserDataTeacherMonth] = useState([]);
  const [userDataStudentMonth, setUserDataStudentMonth] = useState([]);
  const [userDataStudentYear, setUserDataStudentYear] = useState([]);
  const [userDataTeacherYear, setUserDataTeacherYear] = useState([]);

  const [revenueData, setRevenueData] = useState([]);
  const [revenueDataMonth, setRevenueDataMonth] = useState([]);
  const [revenueDataYear, setRevenueDataYear] = useState([]);
  const [selectedDay, setSelectedDay] = useState("Day");
  const [selectedFilter, setSelectedFilter] = useState("UserCount");

  useEffect(() => {
    dispatch(GetClass());
    dispatch(GET_DETAILS("/student", "GET_STUDENT_DETAIL"));
    dispatch(GET_DETAILS("/teacher", "GET_TEACHER_DETAIL"));

    // Sample data for students and teachers
    setUserDataStudent([
      { day: "Mon", value: 300, type: "Student" },
      { day: "Tue", value: 800, type: "Student" },
      { day: "Wed", value: 2700, type: "Student" },
      { day: "Thur", value: 300, type: "Student" },
      { day: "Fri", value: 1200, type: "Student" },
      { day: "Sat", value: 2400, type: "Student" },
      { day: "Sun", value: 440, type: "Student" },
    ]);
    setUserDataTeacher([
      { day: "Mon", value: 200, type: "Teacher" },
      { day: "Tue", value: 900, type: "Teacher" },
      { day: "Wed", value: 3000, type: "Teacher" },
      { day: "Thur", value: 400, type: "Teacher" },
      { day: "Fri", value: 1800, type: "Teacher" },
      { day: "Sat", value: 1600, type: "Teacher" },
      { day: "Sun", value: 220, type: "Teacher" },
    ]);

    setUserDataStudentMonth([
      { day: "Jan", value: 300, type: "Student" },
      { day: "Feb", value: 1800, type: "Student" },
      { day: "Mar", value: 2700, type: "Student" },
      { day: "Apr", value: 3000, type: "Student" },
      { day: "May", value: 4200, type: "Student" },
      { day: "Jun", value: 500, type: "Student" },
      { day: "Jul", value: 600, type: "Student" },
      { day: "Aug", value: 700, type: "Student" },
      { day: "Sep", value: 800, type: "Student" },
      { day: "Oct", value: 9000, type: "Student" },
      { day: "Nov", value: 1450, type: "Student" },
      { day: "Dec", value: 2250, type: "Student" },
    ]);
    setUserDataTeacherMonth([
      { day: "Jan", value: 300, type: "Teacher" },
      { day: "Feb", value: 700, type: "Teacher" },
      { day: "Mar", value: 2700, type: "Teacher" },
      { day: "Apr", value: 3000, type: "Teacher" },
      { day: "May", value: 3200, type: "Teacher" },
      { day: "Jun", value: 400, type: "Teacher" },
      { day: "Jul", value: 500, type: "Teacher" },
      { day: "Aug", value: 900, type: "Teacher" },
      { day: "Sep", value: 100, type: "Teacher" },
      { day: "Oct", value: 2000, type: "Teacher" },
      { day: "Nov", value: 2450, type: "Teacher" },
      { day: "Dec", value: 1250, type: "Teacher" },
    ]);

    setUserDataTeacherYear([
      { day: "2020", value: 300, type: "Teacher" },
      { day: "2021", value: 800, type: "Teacher" },
      { day: "2022", value: 2700, type: "Teacher" },
      { day: "2023", value: 5000, type: "Teacher" },
      { day: "2024", value: 6001, type: "Teacher" },
    ]);

    setUserDataStudentYear([
      { day: "2020", value: 300, type: "Student" },
      { day: "2021", value: 1800, type: "Student" },
      { day: "2022", value: 3700, type: "Student" },
      { day: "2023", value: 8000, type: "Student" },
      { day: "2024", value: 9001, type: "Student" },
    ]);
    setRevenueData([
      { day: "Mon", value: 300 },
      { day: "Tue", value: 800 },
      { day: "Wed", value: 2700 },
      { day: "Thur", value: 300 },
      { day: "Fri", value: 1200 },
      { day: "Sat", value: 2400 },
      { day: "Sun", value: 440 },
    ]);

    setRevenueDataMonth([
      { day: "Jan", value: 300 },
      { day: "Feb", value: 700 },
      { day: "Mar", value: 2700 },
      { day: "Apr", value: 3000 },
      { day: "May", value: 3200 },
      { day: "Jun", value: 400 },
      { day: "Jul", value: 500 },
      { day: "Aug", value: 900 },
      { day: "Sep", value: 100 },
      { day: "Oct", value: 2000 },
      { day: "Nov", value: 2450 },
      { day: "Dec", value: 1250 },
    ]);

    setRevenueDataYear([
      { day: "2020", value: 300 },
      { day: "2021", value: 1800 },
      { day: "2022", value: 3700 },
      { day: "2023", value: 8000 },
      { day: "2024", value: 9001 },
    ]);
  }, [dispatch]);

  const filterDataByFilter = (data, selectedFilter, selectedDay) => {
    if (selectedFilter === "Revenue") {
      if (selectedDay === "Month") {
        return revenueDataMonth;
      } else if (selectedDay === "Year") {
        return revenueDataYear;
      } else {
        return revenueData;
      }
    } else if (selectedFilter === "UserCount") {
      return filterDataByDay(userDataStudent.concat(userDataTeacher), selectedDay);
    } else {
      return data;
    }
  };

  const filterDataByDay = (data, selectedDay) => {
    if (!selectedDay) {
      return data;
    }

    if (selectedDay === "Day") {
      return userDataStudent.concat(userDataTeacher);
    } else if (selectedDay === "Month") {
      return userDataStudentMonth.concat(userDataTeacherMonth);
    } else if (selectedDay === "Year") {
      return userDataStudentYear.concat(userDataTeacherYear);
    } else {
      // Handle filtering by year or any other condition
      return data;
    }
  };




  return (
    <div>
      <InnerHeader icon={<MdIcons.MdDashboard />} name={"Dashboard"} />
      <div className="main-content">
        <div className="chart-section">
          <div className="filter-container" style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="filter-selector">
              <Select
                value={selectedFilter}
                onChange={(value) => setSelectedFilter(value)}
                style={{ width: 120 }}
              >
                <Select.Option value="UserCount">User</Select.Option>
                <Select.Option value="Revenue">Revenue</Select.Option>
              </Select>
            </div>
            <div className="day-selector">
              <Select
                value={selectedDay}
                onChange={(value) => setSelectedDay(value)}
                style={{ width: 120 }}
              >
                <Select.Option value="Day" selected>Day</Select.Option>
                <Select.Option value="Month">Month</Select.Option>
                <Select.Option value="Year">Year</Select.Option>
              </Select>
            </div>
          </div>

          <div className="chart" style={{ marginTop: '100px' }} >
            <h3 style={{ textAlign: 'center' }}>Classy {selectedFilter} by {selectedDay} </h3>
            <Line
              data={filterDataByFilter(revenueData, selectedFilter, selectedDay)}
              xField="day"
              yField="value"
              seriesField="type"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
