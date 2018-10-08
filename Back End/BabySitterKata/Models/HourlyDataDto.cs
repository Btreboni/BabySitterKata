using System;
using Newtonsoft.Json;

namespace BabySitterKata.Models
{
    public class HourlyDataDto
    {
        [JsonProperty("startTime")]
        public int StartTime { get; set; }

        [JsonProperty("downTime")]
        public int DownTime { get; set; }

        [JsonProperty("endTime")]
        public int EndTime { get; set; }
    }
}
