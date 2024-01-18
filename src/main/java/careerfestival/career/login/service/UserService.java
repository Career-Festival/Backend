package careerfestival.career.login.service;

import careerfestival.career.domain.User;
import careerfestival.career.dto.CustomUserDetails;
import careerfestival.career.jwt.JWTUtil;
import careerfestival.career.login.dto.UpdateMypageResponseDto;
import careerfestival.career.login.dto.UserSignUpRequestDto;
import careerfestival.career.repository.RegionRepository;
import careerfestival.career.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final RegionRepository regionRepository;
    private final JWTUtil jwtUtil;

    @Transactional
    public Long signUp(UserSignUpRequestDto userSignUpRequestDto) {

        // DB에 존재하는지 여부 (email로 판단)
        boolean exists = userRepository.existsByEmail(userSignUpRequestDto.getEmail());
        if(exists){
            throw new IllegalStateException("이미 존재하는 이메일입니다.");
        }
        System.out.println("userSignUpRequestDto.getPassword() = " + userSignUpRequestDto.getPassword());
        System.out.println("userSignUpRequestDto.getCheckPassword() = " + userSignUpRequestDto.getCheckPassword());

        //비밀번호 입력 확인
        if(!userSignUpRequestDto.getPassword().equals(userSignUpRequestDto.getCheckPassword())){
            throw new IllegalStateException("비밀번호가 일치하지 않습니다.");
        }



        User user = userSignUpRequestDto.toEntity();
        user.updatePassword(bCryptPasswordEncoder.encode(userSignUpRequestDto.getPassword()));

        userRepository.save(user);

        return user.getId();
    }


    @Transactional
    public void findUserByEmailandUpdate(String email, UpdateMypageResponseDto updateMypageResponseDto){
        User findUser = userRepository.findByEmail(email);
        findUser.update(updateMypageResponseDto);
    }

    @Transactional
    public User findUserByCustomUserDetails(CustomUserDetails customUserDetails){
        return userRepository.findByEmail(customUserDetails.getUsername());
    }
}
