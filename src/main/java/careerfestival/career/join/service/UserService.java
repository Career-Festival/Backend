package careerfestival.career.join.service;

import careerfestival.career.domain.User;
import careerfestival.career.domain.enums.KeywordName;
import careerfestival.career.join.dto.CustomUserDetails;
import careerfestival.career.myPage.dto.MyPageResponseDto;
import careerfestival.career.myPage.dto.UpdateMypageResponseDto;
import careerfestival.career.join.dto.UserSignUpRequestDto;
import careerfestival.career.repository.RegionRepository;
import careerfestival.career.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final RegionRepository regionRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Transactional
    public User signUp(UserSignUpRequestDto userSignUpRequestDto) {

        // DB에 존재하는지 여부 (email로 판단)
        boolean exists = userRepository.existsByEmail(userSignUpRequestDto.getEmail());
        if(exists){
            throw new IllegalStateException("이미 존재하는 이메일입니다.");
        }

        //비밀번호 입력 확인
        if(!userSignUpRequestDto.getPassword().equals(userSignUpRequestDto.getCheckPassword())){
            throw new IllegalStateException("비밀번호가 일치하지 않습니다.");
        }

        User user = userSignUpRequestDto.toEntity();
        user.updatePassword(bCryptPasswordEncoder.encode(userSignUpRequestDto.getPassword()));

        userRepository.save(user);

        return user;
    }


    @Transactional
    public void findUserByEmailAndUpdate(String email, UpdateMypageResponseDto updateMypageResponseDto){
        User findUser = userRepository.findUserByEmail(email);
        findUser.update(updateMypageResponseDto);
        String city = updateMypageResponseDto.getCity();
        String addressLine = updateMypageResponseDto.getAddressLine();
        if(city == null || addressLine == null){
            return;
        }
        if (regionRepository.findRegionByCityAndAddressLine(city, addressLine) == null) {
            return;
        }
        findUser.updateAddressLine(addressLine);
    }

    @Transactional
    public User findUserByCustomUserDetails(CustomUserDetails customUserDetails){
        return userRepository.findUserByEmail(customUserDetails.getUsername());
    }

    @Transactional
    public MyPageResponseDto showMyPage(User user) {
        MyPageResponseDto myPageResponseDto = new MyPageResponseDto();
        myPageResponseDto.setName(user.getName());
        myPageResponseDto.setEmail(user.getEmail());
        myPageResponseDto.setAge(user.getAge());
        myPageResponseDto.setGender(user.getGender());
        myPageResponseDto.setPhoneNumber(user.getPhoneNumber());
        myPageResponseDto.setCompany(user.getCompany());
        myPageResponseDto.setDepartment(user.getDepartment());
        myPageResponseDto.setPosition(user.getPosition());
        myPageResponseDto.setAddressLine(user.getAddressLine());
        List<KeywordName> keyword = user.getKeyword();
        myPageResponseDto.setKeywordName(keyword);
        return myPageResponseDto;

    }

}
