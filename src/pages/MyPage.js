import { MyPageInfo, MyPageCom, MyPageSup } from "../components";
import React, { useState } from 'react';

const MyPage = () => {
    // const [click, setClick] = useState(true);

    return (
        <div class="container" style={{ marginTop: '5vh' }}>
            {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <ul class="nav nav-pills mb-4">
                    <li class="nav-item">
                        <button onClick={() => setClick(true)} class={click ? "nav-link active" : "nav-link"} type="button">영양제</button>
                    </li>
                    <li class="nav-item">
                        <button onClick={() => setClick(false)} class={!click ? "nav-link active" : "nav-link"} type="button">커뮤니티</button>
                    </li>
                </ul>
            </div> */}
            <MyPageInfo />
            <MyPageSup />
            {/* {click ? (
                <MyPageSup />
            ) : (
                <MyPageCom />
            )} */}
            
        </div>
    )
}

export default MyPage;