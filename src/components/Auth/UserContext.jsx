import React, { useEffect, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { TOKEN_STORAGE_ID } from '../../constants/app';
import ECommercePlantsAppAPI from '../../api/ECommercePlantsAppAPI';
import jwt from 'jsonwebtoken';


const UserContext = React.createContext(null);

export default UserContext;