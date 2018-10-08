using System;
using BabySitterKata.Models;
using BabySitterKata.Services.Interfaces;

namespace BabySitterKata.Services.Implementations
{
    public class CalculatorServiceImpl : ICalculatorService
    {
        private int startToDowntimeRate = 12;
        private int downtimeToMidnightRate = 8;
        private int afterMidnightRate = 16;

        /// <summary>
        /// Calculates the babysitters wage, using the start time, the time the children
        /// are put down, and the time the babysitter leaves;
        /// </summary>
        /// <returns>The nightly wage.</returns>
        /// <param name="data">Data.</param>
        public string CalculateNightlyWage(HourlyDataDto data)
        {
            //start time to down time wage, checking to see if downtime was after midnight
            var startToDownTimeWage = data.DownTime > 12 
                ? calculateStartToDownTimeIfDownTimeIsAfterMidnight(data.DownTime, data.StartTime)
                : calculateStartToDownTimeWage(data.DownTime, data.StartTime);

            //down time to midnight wage, checking to see if downtime was after midnight
            var downTimeToMidnightWage = calculateDownTimeToMidnightWage(data.DownTime);

            //after midnight wage
            var afterMidnightWage = calculateAfterMidnightWage(data.EndTime);

            //add up wages
            var wageToReturn = startToDownTimeWage + downTimeToMidnightWage + afterMidnightWage;


            return wageToReturn;
        }

        /// <summary>
        /// Calculates the wages to return from the start time to the end time when the end time
        /// occurs before midnight
        /// </summary>
        /// <returns>The start to down time wage.</returns>
        /// <param name="downTime">Down time.</param>
        /// <param name="startTime">Start time.</param>
        private int calculateStartToDownTimeWage(int downTime, int startTime){
            var wage = (downTime - startTime) * startToDowntimeRate;
            return wage;
        }

        /// <summary>
        /// Calculates the wages to return from start time to the end time when the end time
        /// occurs after midnight, since the wage is higher
        /// </summary>
        /// <returns>The start to down time if down time is after midnight.</returns>
        /// <param name="downTime">Down time.</param>
        /// <param name="startTime">Start time.</param>
        private int calculateStartToDownTimeIfDownTimeIsAfterMidnight(int downTime, int startTime){
            var startTimeToMidnight = (12 - startTime) * startToDowntimeRate;
            var afterMidnight = calculateAfterMidnightWage(downTime);
            var wage = startTimeToMidnight + afterMidnight;
            return wage;
        }

        /// <summary>
        /// If the downTime is after midnight, we've already accounted for it in the startToDownTimeWage, 
        /// so return 0. If not we will calculate the midnight rate
        /// </summary>
        /// <returns>The down time to midnight wage.</returns>
        /// <param name="downTime">Down time.</param>
        private int calculateDownTimeToMidnightWage(int downTime){
            var wage = downTime > 12 ? 0 : (12 - downTime) * downtimeToMidnightRate;
            return wage;
        }

        /// <summary>
        /// Calculates the wages after midnight
        /// </summary>
        /// <returns>The after midnight wage.</returns>
        /// <param name="endTime">End time.</param>
        private int calculateAfterMidnightWage(int endTime){
            var wage = endTime < 12 ? 0 : (endTime - 12) * afterMidnightRate;
            return wage;
        }
    }
}
