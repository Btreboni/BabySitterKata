using System;
using Newtonsoft.Json;

namespace BabySitterKata.Models
{
    public class HourlyDataDto
    {
        [JsonProperty("startTime")]
        public string StartTime { get; set; }

        [JsonProperty("downTime")]
        public string DownTime { get; set; }

        [JsonProperty("endTime")]
        public string EndTime { get; set; }
    }
}
