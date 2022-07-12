import React, { useState, useEffect, useContext } from 'react';
import styled from "styled-components";
import { postApi, putApi } from '../api';
import { AuthContext } from "../App";

const Wrapper = styled.div`
    .modal {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.6);
    }
    .modal button {
        outline: none;
        cursor: pointer;
        border: 0;
    }
    .modal > section {
        width: 90%;
        max-width: 500px;
        margin: 0 auto;
        border-radius: 0.3rem;
        background-color: #fff;
        /* 팝업이 열릴때 스르륵 열리는 효과 */
        animation: modal-show 0.3s;
        overflow: hidden;
    }
    .modal > section > header {
        position: relative;
        padding: 16px 64px 16px 16px;
        background-color: #f1f1f1;
        font-weight: 700;
    }
    .modal > section > header button {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 30px;
        font-size: 21px;
        font-weight: 700;
        text-align: center;
        color: #999;
        background-color: transparent;
    }
    .modal > section > main {
        padding: 16px;
        border-bottom: 1px solid #dee2e6;
        border-top: 1px solid #dee2e6;
    }

    .modal > section > main button {
        margin-right: 10px;
    }

    .modal > section > footer {
        padding: 12px 16px;
        text-align: right;
    }

    .modal.openModal {
        display: flex;
        align-items: center;
        /* 팝업이 열릴때 스르륵 열리는 효과 */
        animation: modal-bg-show 0.3s;
    }
    @keyframes modal-show {
        from {
        opacity: 0;
        margin-top: -50px;
        }
        to {
        opacity: 1;
        margin-top: 0;
        }
    }
    @keyframes modal-bg-show {
        from {
        opacity: 0;
        }
        to {
        opacity: 1;
        }
    }

    @media (max-width: 768px) {
        .modal > section > main {
            font-size: 14px;
        }
        .modal > section > main button {
            font-size: 12px;
        }
    }
`

const ModalSup = ({ open, close, header, supData }) => {
    const authContext = useContext(AuthContext);

    // Count 관리 변수
    const [vitamin, setVitamin] = useState(supData['vitamin'].count);
    const [probio, setProbio] = useState(supData['probio'].count);
    const [omega, setOmega] = useState(supData['omega'].count);

    useEffect(() => {
        setVitamin(supData['vitamin'].count);
        setProbio(supData['probio'].count);
        setOmega(supData['omega'].count);
    }, [open])

    // const [sups, setSups] = useState({
    //     vitamin: supData['vitamin'].count,
    //     probio: supData['probio'].count,
    //     omega: supData['omega'].count
    // })

    const apiSupCnt = async (name, cnt, postOrPut) => {
        if (postOrPut === 'post') {
            await postApi(
                {
                    name: name,
                    count: 30
                },
                '/supplement',
                authContext.state.token
            )
            .then(({ status, data }) => {
                console.log('POST ', status, data);
            })
            .catch((e) => {
                console.log(e);
                if (e.response.status === 404) {
                    alert('해당 ID의 회원을 찾을 수 없습니다.');
                }
            });
        } else {
            await putApi(
                {
                    count: cnt,
                    id: supData[name].id,
                },
                '/supplement',
                authContext.state.token
            )
            .then(({ status, data }) => {
                console.log('PUT ', status, data);
            })
            .catch((e) => {
                console.log(e);
                if (e.response.status === 404) {
                    alert('해당 ID의 영양제를 찾을 수 없습니다.');
                }
            });
        }
    }

    const onChangeCnt = async ({ name, cnt }) => {        
        // await beforeSupCnt(name, cnt).then(afterSupCnt({name, cnt}))
        // function getSups(name) {
        //     if (name === 'vitamin') {
        //         return sups.vitamin
        //     } else if (name === 'probio') {
        //         return sups.probio
        //     } else if (name === 'omega') {
        //         return sups.omega
        //     }
        // }
        
        if (name === 'vitamin') {
            // setSups({...sups, vitamin: getSups(name) + cnt });
            setVitamin(vitamin + cnt);
            if (cnt === 30) {
                apiSupCnt(name, vitamin + cnt, 'post');
            } else {
                apiSupCnt(name, vitamin + cnt, 'put');
            }
        } else if (name === 'probio') {
            setProbio(probio + cnt);
            if (cnt === 30) {
                apiSupCnt(name, probio + cnt, 'post');
            } else {
                apiSupCnt(name, probio + cnt, 'put');
            }
        } else if (name === 'omega') {
            setOmega(omega + cnt);
            if (cnt === 30) {
                apiSupCnt(name, omega + cnt, 'post');
            } else {
                apiSupCnt(name, omega + cnt, 'put');
            }
        }
    }
    
    const OneSupplement = ({ name, count }) => {
        let kor_name = '';
        switch (name) {
            case 'vitamin':
                kor_name = '종합비타민'
                break
            case 'probio':
                kor_name = '프로바이오틱스'
                break
            case 'omega':
                kor_name = '루테인 & 오메가3'
                break
            default:
                kor_name = '종합비타민'
        }
        return (
            <div class="row mb-2 justify-content-center">
                <span class="col">{kor_name} : {count}</span>
                <span class="col btn-group-sm">
                    <span class="col btn-group-sm">
                        <button
                            class={count > 0 ? "btn btn-secondary mb-1" :
                                "btn btn-secondary mb-1 disabled"}
                            onClick={() => onChangeCnt({name: name, cnt: -1})}
                        >-1</button>
                    </span>
                    <button class={count < 30 ? "btn btn-secondary mb-1" :
                                "btn btn-secondary mb-1 disabled"}
                        onClick={() => onChangeCnt({name: name, cnt: 1})}
                    >+1</button>
                    {count === 0 &&
                        <button class="btn btn-dark mb-1"
                            onClick={() => onChangeCnt({name: name, cnt: 30})}
                        >새로 샀어요(+30)</button>}
                </span>
            </div>
        )
    }

    return (
        <Wrapper>
            <div className={open ? 'openModal modal' : 'modal'}>
                {open ? (
                    <section>
                        <header>
                            {header}
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                        </header>
                        <main>
                            <OneSupplement name={supData['vitamin'].name} count={vitamin} />
                            <OneSupplement name={supData['probio'].name} count={probio} />
                            <OneSupplement name={supData['omega'].name} count={omega} />
                        </main>
                    </section>
                ) : null}
            </div>
        </Wrapper>
    );
};

export default ModalSup;