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
        date: "1月10日",
        day: "土",
        time: "13:45 集合 / 16:00-18:00 練習",
        location: "鹿島神社 → あづま球場 → 室内練習場",
        details: "14:00 必勝祈願 / 室内練習 & 保護者の集まり",
        title: "必勝祈願・室内練習",
        isoDate: "2026-01-10"
    },
    {
        date: "1月11日",
        day: "日",
        time: "10:00-12:00 / 13:00-16:00",
        location: "平石小 体育館 / 平石小 校庭",
        details: "ティガスタ現状確認",
        title: "通常練習 (体育館・校庭)",
        isoDate: "2026-01-11"
    },
    {
        date: "1月12日",
        day: "月・祝",
        time: "10:00-12:00 / 9:00-16:00",
        location: "平石小 体育館 / 平石小 校庭",
        details: "※体育館使用時間は要確認",
        title: "通常練習 (体育館・校庭)",
        isoDate: "2026-01-12"
    },
    {
        date: "1月17日",
        day: "土",
        time: "13:00-16:00",
        location: "平石小 校庭",
        details: "",
        title: "通常練習",
        isoDate: "2026-01-17"
    },
    {
        date: "1月18日",
        day: "日",
        time: "13:00-16:00",
        location: "平石小 校庭",
        details: "",
        title: "通常練習",
        isoDate: "2026-01-18"
    },
    {
        date: "1月24日",
        day: "土",
        time: "10:00-12:00 / 13:00-16:00",
        location: "平石小 体育館 / 平石小 校庭",
        details: "",
        title: "通常練習 (体育館・校庭)",
        isoDate: "2026-01-24"
    },
    {
        date: "1月25日",
        day: "日",
        time: "10:00-12:00 / 13:00-16:00",
        location: "平石小 体育館 / 平石小 校庭",
        details: "",
        title: "通常練習 (体育館・校庭)",
        isoDate: "2026-01-25"
    },
    {
        date: "1月31日",
        day: "土",
        time: "13:00-16:00",
        location: "平石小 校庭",
        details: "",
        title: "通常練習",
        isoDate: "2026-01-31"
    },
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
