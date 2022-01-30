import { Grid } from "@mui/material";
import { Card } from "@mui/material";

import { WiSunrise } from "react-icons/wi";
import { FaHighlighter } from "react-icons/fa";
import { FaTemperatureHigh } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdOnlinePrediction } from "react-icons/md";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Card
          sx={{
            margin: "1rem",
            boxSizing: "border-box",
            borderRadius: "2rem",
            backgroundColor: "#1D71F2",
            color: "#E3F4FE",
          }}
        >
          <div className="dashboard-header-wrapper">
            <div>
              <FaHighlighter size={30} />
            </div>

            <div className="dashboard-header-topic">Today's Highlight</div>
          </div>
        </Card>
      </Grid>
      {[1, 2, 3, 4].map(() => (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
          <Card
            sx={{
              margin: "1rem",
              boxSizing: "border-box",
              borderRadius: "2rem",
              backgroundColor: "#1D71F2",
              color: "#E3F4FE",
            }}
          >
            <div className="dashboard-item-wrapper">
              <div>
                <WiSunrise size={70} />
                <div>Sun Rise</div>
              </div>

              <div className="dashboard-item-value">06 : 25 AM</div>
            </div>
          </Card>
        </Grid>
      ))}


      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Card
          sx={{
            margin: "1rem",
            boxSizing: "border-box",
            borderRadius: "2rem",
            backgroundColor: "#1D71F2",
            color: "#E3F4FE",
          }}
        >
          <div className="dashboard-header-wrapper">
            <div>
              <MdOnlinePrediction size={30} />
            </div>

            <div className="dashboard-header-topic">Next Four Days</div>
          </div>
        </Card>
      </Grid>
      {[1, 2, 3, 4].map(() => (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
          <Card
            sx={{
              margin: "1rem",
              boxSizing: "border-box",
              borderRadius: "2rem",
              backgroundColor: "#1D71F2",
              color: "#E3F4FE",
            }}
          >
            <div className="dashboard-item-future-days-wrapper">
              <div>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
              </div>
              <div >
                <div style={{paddingBottom:'0.3rem'}}>
                  <BsFillCalendarDateFill style={{ marginRight: "0.3rem" }} />
                  Sunday Jan 25
                </div>
                <div style={{paddingBottom:'0.3rem'}}>
                  <FaTemperatureHigh style={{ marginRight: "0.3rem" }} />
                  25
                </div>
                <div>
                  <MdDescription style={{ marginRight: "0.3rem" }} />
                  Light Rain
                </div>
              </div>
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard;
