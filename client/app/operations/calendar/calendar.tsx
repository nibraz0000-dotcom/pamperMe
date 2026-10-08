"use client";

import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './calendar.module.css';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Check,
  Printer,
  Palette,
  User,
  Sun,
  Armchair,
} from 'lucide-react';

export default function CalendarView() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('Calendars');
  const [selectedDate, setSelectedDate] = useState<any>(new Date());
  const [isEmployeesOpen, setIsEmployeesOpen] = useState(true);
  const [isResourcesOpen, setIsResourcesOpen] = useState(true);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    'Classes': false,
    'Employee 1': true,
    'Employee 2': false,
    'Employee 3': false,
    'Chair 1': false,
    'Chair 2': false,
  });

  const [selectedEmployees, setSelectedEmployees] = useState<string[]>(['Employee 1']);
  const [selectedResources, setSelectedResources] = useState<string[]>([]);

  const toggleCheck = (item: string) => {
    setCheckedItems((prev) => ({ ...prev, [item]: !prev[item] }));

    const employeeItems = ['Employee 1', 'Employee 2', 'Employee 3'];
    const resourceItems = ['Chair 1', 'Chair 2', 'Salon Chair 1', 'Salon Chair 2'];

    if (employeeItems.includes(item)) {
      setSelectedEmployees((prev) => {
        if (prev.includes(item)) {
          return prev.filter((e) => e !== item);
        } else {
          return [...prev, item];
        }
      });
    } else if (resourceItems.includes(item)) {
      setSelectedResources((prev) => {
        if (prev.includes(item)) {
          return prev.filter((r) => r !== item);
        } else {
          return [...prev, item];
        }
      });
    }
  };

  const activeColumns = [...selectedEmployees, ...selectedResources];
  const hasBothSections = selectedEmployees.length > 0 && selectedResources.length > 0;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const formatHeaderDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <>
      {/* Secondary Sidebar */}
      <div className={styles.secondarySidebar}>
        <div className={styles.secondaryHeader}>Calendar</div>

        <div className={styles.miniCalendar}>
          {isMounted && (
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              className={styles.customCalendar}
              formatShortWeekday={(locale, date) =>
                ['S', 'M', 'T', 'W', 'TH', 'F', 'S'][date.getDay()]
              }
              formatMonth={(locale, date) =>
                ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][
                  date.getMonth()
                ]
              }
              formatMonthYear={(locale, date) =>
                `${
                  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][
                    date.getMonth()
                  ]
                } ${date.getFullYear()}`
              }
              calendarType="gregory"
              showNeighboringMonth={false}
              tileClassName={({ date, view }) =>
                view === 'month' && date.getDay() === 0 ? 'sunday-tile' : ''
              }
              prevLabel={<ChevronLeft size={14} />}
              nextLabel={<ChevronRight size={14} />}
              prev2Label={null}
              next2Label={null}
              navigationLabel={({ label }) => (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.2rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <ChevronDown size={13} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
                    {label}
                  </span>
                </div>
              )}
            />
          )}
        </div>

        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${activeTab === 'Calendars' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('Calendars')}
          >
            Calendars
          </div>
          <div
            className={`${styles.tab} ${activeTab === 'Categories' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('Categories')}
          >
            Categories
          </div>
        </div>

        <div className={styles.section}>
          <div
            className={styles.sectionTitle}
            onClick={() => setIsEmployeesOpen(!isEmployeesOpen)}
            style={{ cursor: 'pointer', userSelect: 'none' }}
          >
            <ChevronDown
              size={16}
              style={{
                transform: isEmployeesOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
                transition: 'transform 0.2s ease',
              }}
            />
            Employees
          </div>
          {isEmployeesOpen && (
            <div className={styles.checkboxList}>
              {['Classes', 'Employee 1', 'Employee 2', 'Employee 3'].map((item) => (
                <div
                  key={item}
                  className={styles.checkboxItem}
                  onClick={() => toggleCheck(item)}
                  style={{ cursor: 'pointer', userSelect: 'none' }}
                >
                  <div
                    className={`${styles.checkbox} ${
                      checkedItems[item] ? styles.checkboxChecked : ''
                    }`}
                  >
                    {checkedItems[item] && <Check size={12} />}
                  </div>
                  <span style={checkedItems[item] ? { fontWeight: 600, color: '#111827' } : {}}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.section}>
          <div
            className={styles.sectionTitle}
            onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            style={{ cursor: 'pointer', userSelect: 'none' }}
          >
            <ChevronDown
              size={16}
              style={{
                transform: isResourcesOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
                transition: 'transform 0.2s ease',
              }}
            />
            Resources
          </div>
          {isResourcesOpen && (
            <div className={styles.checkboxList}>
              {['Chair 1', 'Chair 2'].map((item) => (
                <div
                  key={item}
                  className={styles.checkboxItem}
                  onClick={() => toggleCheck(item)}
                  style={{ cursor: 'pointer', userSelect: 'none' }}
                >
                  <div
                    className={`${styles.checkbox} ${
                      checkedItems[item] ? styles.checkboxChecked : ''
                    }`}
                  >
                    {checkedItems[item] && <Check size={12} />}
                  </div>
                  <span style={checkedItems[item] ? { fontWeight: 600, color: '#111827' } : {}}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <button className={styles.inTodayBtn}>
          <Sun size={18} />
          In Today
        </button>
      </div>

      {/* Calendar Area */}
      <div className={styles.calendarArea}>
        <div className={styles.calendarToolbar}>
          <div className={styles.toolbarLeft}>
            <button className={styles.todayBtn}>Today</button>
            <div className={styles.dateNav}>
              <ChevronLeft
                size={20}
                className={styles.navArrow}
                onClick={() => {
                  const newDate = new Date(selectedDate);
                  newDate.setDate(newDate.getDate() - 1);
                  setSelectedDate(newDate);
                }}
              />
              {formatHeaderDate(selectedDate)}
              <ChevronRight
                size={20}
                className={styles.navArrow}
                onClick={() => {
                  const newDate = new Date(selectedDate);
                  newDate.setDate(newDate.getDate() + 1);
                  setSelectedDate(newDate);
                }}
              />
            </div>
          </div>

          <div className={styles.toolbarRight}>
            <button className={styles.dropdownBtn}>
              <CalendarIcon size={16} /> Day <ChevronDown size={14} />
            </button>
            <button className={styles.addBtn}>
              Add <ChevronDown size={14} />
            </button>
            <Printer size={20} color="#6b7280" style={{ cursor: 'pointer', marginLeft: '0.5rem' }} />
            <Palette size={20} color="#6b7280" style={{ cursor: 'pointer', marginLeft: '0.5rem' }} />
          </div>
        </div>

        <div className={styles.gridHeader}>
          <div className={styles.headerTimeOffset}></div>
          <div className={styles.employeeColumnsHeader}>
            {activeColumns.length === 0 ? (
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#9ca3af',
                  fontSize: '0.875rem',
                }}
              >
                Select an employee or resource from the sidebar
              </div>
            ) : (
              <>
                {selectedEmployees.map((emp, idx) => (
                  <div
                    key={`emp-${emp}`}
                    className={`${styles.employeeHeader} ${
                      hasBothSections && idx === selectedEmployees.length - 1
                        ? styles.sectionEndColumn
                        : ''
                    }`}
                  >
                    <div className={styles.employeeAvatar}>
                      <User size={18} />
                    </div>
                    <div className={styles.headerInfo}>
                      <span className={styles.headerName}>{emp}</span>
                      {hasBothSections && <span className={styles.headerRole}>Staff</span>}
                    </div>
                  </div>
                ))}
                {selectedResources.map((res) => (
                  <div key={`res-${res}`} className={styles.employeeHeader}>
                    <div className={`${styles.employeeAvatar} ${styles.resourceAvatar}`}>
                      <Armchair size={17} />
                    </div>
                    <div className={styles.headerInfo}>
                      <span className={styles.headerName}>{res}</span>
                      {hasBothSections && <span className={styles.headerRole}>Resource</span>}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        <div className={styles.gridScroll}>
          {Array.from({ length: 10 }).map((_, i) => {
            const hour = i + 8;
            const ampm = hour >= 12 ? 'PM' : 'AM';
            const displayHour = hour > 12 ? hour - 12 : hour;
            return (
              <React.Fragment key={i}>
                <div className={styles.timeRow}>
                  <div className={styles.timeLabel}>
                    {displayHour} {ampm}
                  </div>
                  <div className={styles.employeeSlotsRow}>
                    {activeColumns.length === 0 ? (
                      <div className={styles.timeSlot}></div>
                    ) : (
                      <>
                        {selectedEmployees.map((emp, idx) => (
                          <div
                            key={`emp-slot-${emp}`}
                            className={`${styles.timeSlot} ${
                              hasBothSections && idx === selectedEmployees.length - 1
                                ? styles.sectionEndSlot
                                : ''
                            }`}
                          ></div>
                        ))}
                        {selectedResources.map((res) => (
                          <div key={`res-slot-${res}`} className={styles.timeSlot}></div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
                <div className={styles.timeRow}>
                  <div className={styles.timeLabel}>15</div>
                  <div className={styles.employeeSlotsRow}>
                    {activeColumns.length === 0 ? (
                      <div className={styles.timeSlot}></div>
                    ) : (
                      <>
                        {selectedEmployees.map((emp, idx) => (
                          <div
                            key={`emp-slot-${emp}`}
                            className={`${styles.timeSlot} ${
                              hasBothSections && idx === selectedEmployees.length - 1
                                ? styles.sectionEndSlot
                                : ''
                            }`}
                          ></div>
                        ))}
                        {selectedResources.map((res) => (
                          <div key={`res-slot-${res}`} className={styles.timeSlot}></div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
                <div className={styles.timeRow}>
                  <div className={styles.timeLabel}>30</div>
                  <div className={styles.employeeSlotsRow}>
                    {activeColumns.length === 0 ? (
                      <div className={styles.timeSlot}></div>
                    ) : (
                      <>
                        {selectedEmployees.map((emp, idx) => (
                          <div
                            key={`emp-slot-${emp}`}
                            className={`${styles.timeSlot} ${
                              hasBothSections && idx === selectedEmployees.length - 1
                                ? styles.sectionEndSlot
                                : ''
                            }`}
                          ></div>
                        ))}
                        {selectedResources.map((res) => (
                          <div key={`res-slot-${res}`} className={styles.timeSlot}></div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
                <div className={styles.timeRow}>
                  <div className={styles.timeLabel}>45</div>
                  <div className={styles.employeeSlotsRow}>
                    {activeColumns.length === 0 ? (
                      <div className={styles.timeSlot}></div>
                    ) : (
                      <>
                        {selectedEmployees.map((emp, idx) => (
                          <div
                            key={`emp-slot-${emp}`}
                            className={`${styles.timeSlot} ${
                              hasBothSections && idx === selectedEmployees.length - 1
                                ? styles.sectionEndSlot
                                : ''
                            }`}
                          ></div>
                        ))}
                        {selectedResources.map((res) => (
                          <div key={`res-slot-${res}`} className={styles.timeSlot}></div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </React.Fragment>
            );
          })}

          {activeColumns.length > 0 && (
            <div
              className={styles.appointment}
              style={{
                width: `calc((100% - 3.75rem) / ${activeColumns.length} - 0.5rem)`,
              }}
            >
              12:00 PM
            </div>
          )}
        </div>
      </div>
    </>
  );
}
