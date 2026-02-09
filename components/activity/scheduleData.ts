export interface ScheduleItem {
    date: string;
    day: string;
    time: string;
    location: string;
    details: string;
    title?: string;
    isoDate: string; // YYYY-MM-DD for sorting/filtering
}

export const scheduleData: ScheduleItem[] = [

    {
        date: "2月1日",
        day: "日",
        time: "10:00-12:00 / 12:45-16:00",
        location: "平石小 体育館 / 平石小 校庭",
        details: "",
        title: "通常練習 (体育館・校庭)",
        isoDate: "2026-02-01"
    },
    {
        date: "2月7日",
        day: "土",
        time: "12:45-16:00",
        location: "平石小 校庭",
        details: "",
        title: "通常練習",
        isoDate: "2026-02-07"
    },
    {
        date: "2月8日",
        day: "日",
        time: "12:45-16:00",
        location: "平石小 校庭",
        details: "",
        title: "通常練習",
        isoDate: "2026-02-08"
    },
    {
        date: "2月11日",
        day: "水・祝",
        time: "9:00-12:00 / 12:45-16:00",
        location: "平石小 体育館 / 平石小 校庭",
        details: "9:00〜16:00 体育館or校庭 ※9:00〜12:00まで体育館も使用できます！",
        title: "通常練習 (体育館・校庭)",
        isoDate: "2026-02-11"
    },
    {
        date: "2月14日",
        day: "土",
        time: "10:00-12:00 / 12:45-16:00",
        location: "平石小 体育館 / 平石小 校庭",
        details: "",
        title: "通常練習 (体育館・校庭)",
        isoDate: "2026-02-14"
    },
    {
        date: "2月15日",
        day: "日",
        time: "練習試合",
        location: "詳細後日",
        details: "詳細は後日",
        title: "練習試合",
        isoDate: "2026-02-15"
    },
    {
        date: "2月21日",
        day: "土",
        time: "練習試合",
        location: "詳細後日",
        details: "詳細は後日 ※4年生以下の試合も有る予定",
        title: "練習試合",
        isoDate: "2026-02-21"
    },
    {
        date: "2月22日",
        day: "日",
        time: "12:45-16:00",
        location: "平石小 校庭",
        details: "",
        title: "通常練習",
        isoDate: "2026-02-22"
    },
    {
        date: "2月23日",
        day: "月・祝",
        time: "練習試合",
        location: "詳細後日",
        details: "詳細は後日",
        title: "練習試合",
        isoDate: "2026-02-23"
    },
    {
        date: "2月28日",
        day: "土",
        time: "練習試合",
        location: "詳細後日",
        details: "詳細は後日",
        title: "練習試合",
        isoDate: "2026-02-28"
    },
]
