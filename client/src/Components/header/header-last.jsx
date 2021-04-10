import React from 'react'

class HeaderLast extends React.Component {

    render() { 
        return (  
            <div className="header-last">
                <div className="student-container">
                    
                    <img src="./img/stat-student.svg" alt="students" />
                    <p className="absolute-position student">
                        179,610
                    </p>
                    
                    
                    <p>
                        نفر دانش آموز                    
                    </p>
                </div>

                <div className="teacher-container">
                    
                    <img src="./img/stat-teacher.svg" alt="teacher" />
                    <p className="absolute-position teacher">
                        154
                    </p>
                    
                    <p>
                        اساتید مجرب
                    </p>
                </div>

                <div className="time-container">
                    
                    <img src="./img/stat-time.svg" alt="time" />
                    <p className="absolute-position time">
                        213,252
                    </p>
                    
                    <p>
                        ساعت آموزش
                    </p>
                </div>
            </div>
        );
    }
}
 
export default HeaderLast;