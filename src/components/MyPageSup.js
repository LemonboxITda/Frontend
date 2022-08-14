import styled from "styled-components";
import React, { useState, useEffect, useContext } from 'react';
import { getApi } from "../api";
import { Colors } from '../styles/ui';
import { ModalSup } from '../components';
import { AuthContext } from "../App";
import { mallLink } from "./mallLink";

const Wrapper = styled.div`
    margin-top: 40px;
    text-align: left;

    .title {
        font-weight: bold;
        margin: 30px 0;
    }

    .supplement {
        margin: 20px 0;
        
        .vitamin {
            background-color: ${Colors.vitamin};
            color: ${Colors.black};
            border: ${Colors.vitamin} 1px solid;
        }

        .vitamin-blank {
            color: ${Colors.vitamin};
            border: ${Colors.vitamin} 1px solid;
        }

        .probio {
            background-color: ${Colors.probio};
            color: ${Colors.white};
            border: ${Colors.probio} 1px solid;
        }

        .probio-blank {
            color: ${Colors.probio};
            border: ${Colors.probio} 1px solid;
        }

        .omega {
            background-color: ${Colors.omega};
            color: ${Colors.white};
            border: ${Colors.omega} 1px solid;
        }

        .omega-blank {
            color: ${Colors.omega};
            border: ${Colors.omega} 1px solid;
        }
    }

    .supplement button {
        margin-right: 10px;
        font-weight: 600;
    }

    .supplement a {
        text-decoration: none;
        color: ${Colors.gray2};
        font-weight: 600;
    }

    .modify-btn {
        float: right;
    }

    @media (max-width: 768px) {
        .supplement button,
        .supplement span {
            font-size: 14px;
        }
    }
`

const dumpSupRawData = [
    {
        "id": 0,
        "name": "vitamin",
        "count": 30
    },
    {
        "id": 1,
        "name": "probio",
        "count": 21
    },
]

const initialSupData = {
    'vitamin': {
        "id": null,
        "name": "vitamin",
        "count": 0,
    },
    'probio': {
        "id": null,
        "name": "probio",
        "count": 0,
    },
    'omega': {
        "id": null,
        "name": "omega",
        "count": 0,
    }
}

const MyPageSup = () => {
    const authContext = useContext(AuthContext);

    // 영양제 이름, 영양제 id, 남은 개수
    const [supRawData, setSupRawData] = useState();
    const [supData, setSupData] = useState(initialSupData);

    // 모달 창
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const getSupplement = async () => { // 영양제 정보 GET 
        await getApi({}, '/supplement', authContext.state.token)
            .then(({ status, data }) => {

                if (status === 200 && data.statusCodeValue === undefined) {
                    // console.log('GET:', status, data.statusCodeValue, data);
                    setSupRawData(data);  // 얘를 지우면 첫번재 렌더링 시 제대로 안되는 이유? supRawData 이용하는 부분이 없는데..
                    data &&
                        data !== [] &&
                        data.map((sup, i) => (
                            supData[sup.name] = {
                                key: i,
                                id: sup.id,
                                name: sup.name,
                                count: sup.count,
                            }
                        ));
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }

    useEffect(() => {
        getSupplement();
    }, [authContext.state.token, !modalOpen]);

    useEffect(() => {
        getSupplement();
    }, [modalOpen])

    // 아래와 같이 useEffect를 이용했을 때 첫번째 렌더링할 때 작동하지 않음 -> reducer, dispatch를 이용하면 해결?
    // useState의 비동기식 처리 때문
    // useEffect(() => {
    //     supRawData && 
    //     supRawData !== [] &&
    //     supRawData.map((sup, i) => (
    //         supData[sup.name] = {
    //             id: sup.id,
    //             name: sup.name,
    //             count: sup.count,
    //         }
    //     ));
    // }, [supRawData]);

    const Supplement = ({ name, count }) => {
        let kor_name = '';
        let link_idx;
        switch (name) {
            case 'vitamin':
                kor_name = '종합비타민';
                break
            case 'probio':
                kor_name = '프로바이오틱스';
                break
            case 'omega':
                kor_name = '루테인 & 오메가3';
                break
            default:
                kor_name = '종합비타민'
        }
        return (
            <div class="supplement">
                {
                    count === 0 ? (
                        <button type="button" class={`btn disabled ${name}-blank`}>{kor_name}</button>
                    ) : (
                        <button type="button" class={`btn disabled ${name}`}>{kor_name}</button>
                    )
                }
                {
                    count === 0 ? (
                        <span><a href={mallLink(name)} target='_blank' rel='noreferrer'>영양제 주문하러 가기&gt;&gt;</a></span>
                    ) : (
                        count > 0 && count <= 10 ? (
                            <span>
                                <span style={{ fontWeight: '600' }}>[{count}알 / 30알]</span>
                                거의 다 먹었군요!
                                <a href={mallLink(name)}>새로 주문하러 가기&gt;&gt;</a>
                            </span>
                        ) : (
                            <span><span style={{ fontWeight: '600' }}>[{count}알 / 30알]</span> 오늘도 화이팅!</span>
                        )
                    )
                }
            </div>
        )
    }

    return (
        <Wrapper>
            <h4 className='title'>영양제 정보</h4>
            <h5>내가 먹고 있는 영양제</h5>
            <Supplement name={supData['vitamin'].name} count={supData['vitamin'].count} />
            <Supplement name={supData['probio'].name} count={supData['probio'].count} />
            <Supplement name={supData['omega'].name} count={supData['omega'].count} />
            <button class="btn btn-outline-secondary btn-sm mb-4 modify-btn" onClick={openModal}>영양제 개수 수정하기</button>
            <ModalSup open={modalOpen} close={closeModal} header={"영양제 개수 수정"} supData={supData} />
        </Wrapper>
    )
}

export default MyPageSup;